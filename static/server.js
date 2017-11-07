"use strict";

var THREE = require("./../modules/three");
var Ammo = require("./../modules/ammo");
var Physijs = require("./../modules/physi")(THREE, Ammo);

var IO = require("socket.io-client");
var Game = require("./game");
var HUD = require("./hud");
var KeyManager = require("./keymanager");
var Renderer = require("./renderer");
var Player = require("./player");

class Server {
	constructor(http, io, app) {
		this.game = new Game();
		this.http = http;
		this.io = io;
		this.app = app;

		this.numBots = 0;
		this.numPlayers = 0;
	}

	start() {
		console.log("Server is now listening on " + this.app.get("ip") + ":" + this.app.get("port"));
		this.http.listen(this.app.get("port"), this.app.get("ip"));

		this.game.setUpdateCallback(this.update, this);

		this.game.start();
		this.manageIncomingData(this);
		this.manageConsoleInput(this);

		console.log("Server has started.");

		this.addBot();
		this.addBot();
	}

	stop(code) {
		if (code != 0) {
			console.log("Server has unexpectedly crashed!");
			process.exit(code);
		} else {
			console.log("Stopping server!");
			this.game.stop();
			console.log("Server has stopped!");
			process.exit(0);
		}
	}

	manageIncomingData(server) {
		this.io.on("connection", function(client) {
			client.on("player_login", function(data) {
				server.onPlayerLogin(client, data);
			});

			client.on("player_disconnect", function(data) {
				server.onPlayerDisconnect(client, data);
			});

			client.on("player_move", function(data) {
				server.onPlayerMove(client, data);
			});

			var connectionCheck = setInterval(function() {
				if (!client.connected) {
					server.onPlayerDisconnect(client, {});
					clearInterval(connectionCheck);
				}
			});
		});
	}

	manageConsoleInput(server) {
		var stdin = process.openStdin();

		stdin.addListener("data", function(d) {
			var args = d
				.toString()
				.trim()
				.match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g);

			if (typeof args === "undefined" || args.length == 0) return;

			var cmd = args[0];

			switch (cmd) {
				case "exit":
				case "s":
				case "stop":
					server.stop(0);
					break;
				case "players":
					server.listPlayers();
					break;
				case "tp":
					if (args.length != 5) break;
					var player = server.game.getPlayer(args[1]);
					if (typeof player === "undefined" || typeof player.position === "undefined") {
						console.log("Could not find player for id" + args[1]);
						break;
					}
					player.setPosition({
						x: Number(args[2]),
						y: Number(args[3]),
						z: Number(args[4])
					});
					server.game.players[player.id] = player;
					console.log("Teleported " + player.name + " to %x, %y, %z", player.position.x, player.position.y, player.position.z);
					break;
				case "addbot":
					server.addBot();
					break;
				default:
			}
		});
	}

	listPlayers() {
		var list = [];
		var playerCount = 0;
		for (var key in this.game.players) {
			if (this.game.players.hasOwnProperty(key)) {
				var player = this.game.players[key];
				list.push("	- " + player.name);
				playerCount++;
			}
		}
		console.log("Players online (" + playerCount + ")");
		for (var i = 0; i < list.length; i++) {
			console.log(list[i]);
		}
	}

	checkForSpawnPosition() {
		var position = { x: 0, y: 0, z: 0 };

		var distance = 20;

		for (var key in this.game.players) {
			if (this.game.players.hasOwnProperty(key)) {
				if (this.game.players[key].serverPosition.x <= position.x) {
					position.x += distance;
				}
				if (this.game.players[key].serverPosition.z <= position.z) {
					position.z += distance;
				}
			}
		}

		return position;
	}

	uuid() {
		var d = new Date().getTime();
		if (typeof performance !== "undefined" && typeof performance.now === "function") {
			d += performance.now(); //use high-precision timer if available
		}
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
			var r = ((d + Math.random() * 16) % 16) | 0;
			d = Math.floor(d / 16);
			return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
		});
	}

	addBot() {
		let bot = new Player(this.uuid(), "Bot_" + this.numBots, this.checkForSpawnPosition(), false, true);

		this.io.emit("player_join", {
			id: bot.id,
			player: bot.formatJSON()
		});

		bot.createModel(this.game);
		this.game.addPlayer(bot);

		this.numBots++;

		console.log("Added " + this.game.players[bot.id].name + " to the game!");
	}

	onPlayerLogin(client, data) {
		let player = new Player(this.uuid(), data.name == false ? "Player_" + this.numPlayers : data.name, this.checkForSpawnPosition(), false, true);

		player.socket_id = client.id;

		for (var key in this.game.players) {
			if (this.game.players.hasOwnProperty(key)) {
				client.emit("player_join", {
					id: key,
					player: this.game.players[key].formatJSON()
				});
			}
		}

		client.broadcast.emit("player_join", {
			id: player.id,
			player: player.formatJSON()
		});

		client.emit("player_login_successful", {
			id: player.id,
			player: player.formatJSON()
		});

		player.createModel(this.game);
		this.game.addPlayer(player);

		this.numPlayers++;

		console.log(this.game.players[player.id].name + " has joined!");
	}

	onPlayerDisconnect(client, data) {
		var player = this.game.getPlayerFromSocketID(client.id);
		if (player) {
			client.broadcast.emit("player_disconnect", {
				id: player.id
			});

			console.log(player.name + " has left the game!");

			this.game.removePlayer(player.id);
		}
	}

	onPlayerMove(client, data) {
		var player = this.game.players[data.id];
		if (typeof player === "undefined") {
			return;
		} else {
			player.move(data.input, this.game.scene);
		}
	}

	update(dt, server) {
		for (var key in server.game.players) {
			if (server.game.players.hasOwnProperty(key)) {
				server.io.emit("player_move", {
					id: server.game.players[key].id,
					position: server.game.players[key].getPosition(),
					timeSentAt: new Date().getTime()
				});
			}
		}
	}
}

module.exports = Server;
