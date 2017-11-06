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

class Client {
  constructor(game, socket, renderer, hud, keyManager) {
    this.game = game;
    this.socket = socket;
    this.renderer = renderer;
    this.hud = hud;
    this.keyManager = keyManager;
  }

  start() {
    this.game.scene.add(this.renderer.camera);

    this.game.start();
    this.manageIncomingData(this, this.socket);
  }

  stop() {
    this.game.stop();
    process.exit(0);
  }

  manageIncomingData(client, socket) {
    socket.on("connect", function (data) {
      client.onConnectionSuccessful(socket, data);
    });

    socket.on("player_join", function (data) {
      client.onPlayerJoin(socket, data);
    });

    socket.on("player_login_successful", function (data) {
      client.onPlayerSuccessLogin(socket, data);
    });

    socket.on("player_disconnect", function (data) {
      client.onPlayerDisconnect(socket, data);
    });

    socket.on("player_move", function (data) {
      client.onPlayerMove(socket, data);
    });
  }

  onConnectionSuccessful(socket, data) {
    socket.emit("player_login", { name: socket.id });
  }

  onPlayerJoin(socket, data) {
    let player = new Player(data.id, data.data.name, data.data.position, false);

    console.log(player.name + " has joined the game.");

    player.createModel(this.game);
    player.createNametag(this.game);
    this.game.addPlayer(player);
  }

  onPlayerSuccessLogin(socket, data) {
    let player = new Player(data.id, data.data.name, data.data.position, true);

    console.log(
      "You have successfully logged in! Your client ID is " + data.id + "."
    );

    player.createModel(this.game);
    this.game.addPlayer(player);

    this.controllingClient_ID = data.id;
  }

  onPlayerDisconnect(socket, data) {
    console.log(this.game.getPlayer(data.id).name + " has left the game.");

    this.game.removePlayer(data.id);
  }

  onPlayerMove(socket, data) {
    if (typeof this.game.players[data.id] === "undefined") {
      console.log("Could not find player for id " + data.id);
      return;
    } else {
      this.game.players[data.id].setServerPosition(
        data.position,
        data.timeSentAt
      );
    }
  }

  update_input(keyManager) {
    var mov_key = {
      x: 0,
      y: 0,
      z: 0
    };

    var controllingPlayer = this.game.getPlayer(this.controllingClient_ID);
    if (typeof controllingPlayer !== "undefined") {
      if (keyManager.isDown(keyManager.KeyCodes.UP)) mov_key.z = -1;
      if (keyManager.isDown(keyManager.KeyCodes.DOWN)) mov_key.z = 1;
      if (keyManager.isDown(keyManager.KeyCodes.LEFT)) mov_key.x = -1;
      if (keyManager.isDown(keyManager.KeyCodes.RIGHT)) mov_key.x = 1;

      this.socket.emit("player_move", {
        id: controllingPlayer.id,
        input: mov_key
      });

      controllingPlayer.move(mov_key);

      this.renderer.setCameraPosition({
        x: controllingPlayer.model.position.x,
        y: controllingPlayer.model.position.y + 16,
        z: controllingPlayer.model.position.z + 64
      });
    }
  }

  tick(client) {
    if (typeof client.game === "undefined") return;

    var performanceInfo = {};
    performanceInfo.fps = client.game.fps;
    performanceInfo.ups = client.game.ups;

    client.hud.setPerformanceInfo(performanceInfo);
  }

  update(dt, client) {
    client.update_input(client.keyManager);

    var controllingPlayer = client.game.players[client.controllingClient_ID];
    if (typeof controllingPlayer === "undefined") return;

    var controllingPlayerPos = {
      x: controllingPlayer.model.position.x,
      y: controllingPlayer.model.position.y,
      z: controllingPlayer.model.position.z
    };

    client.hud.setPosition(controllingPlayerPos);
    client.hud.updatePlayerList(client.game.players);
  }

  render(dt, client) {
    client.renderer.render(client.game.scene);
  }
}

module.exports = Client;

window.onload = function () {
  var socket = IO();

  let game = new Game();
  let renderer = new Renderer();
  let keyManager = new KeyManager();
  let hud = new HUD();

  let client = new Client(game, socket, renderer, hud, keyManager);

  game.setTickCallback(client.tick, client);
  game.setUpdateCallback(client.update, client);
  game.setRenderCallback(client.render, client);

  client.start();
};
