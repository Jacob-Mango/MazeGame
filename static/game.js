"use strict";

var THREE = require("./../modules/three");
var Ammo = require("./../modules/ammo");
var Physijs = require("./../modules/physi")(THREE, Ammo);

var IO = require("socket.io-client");
var HUD = require("./hud");
var KeyManager = require("./keymanager");
var Renderer = require("./renderer");
var Player = require("./player");

var frame_time = 60 / 1000;

var lastTime = 0;
var requestAnimationFrame = function(callback, element) {
	return 0;
};
var cancelAnimationFrame = function(id) {};

if (process.env.BROWSER) {
	(function() {
		var vendors = ["ms", "moz", "webkit", "o"];

		for (var x = 0; x < vendors.length && !requestAnimationFrame; ++x) {
			requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
			cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
		}
	})();
} else {
	requestAnimationFrame = function(callback, element) {
		var currTime = Date.now(),
			timeToCall = Math.max(0, frame_time - (currTime - lastTime));
		var id = setTimeout(function() {
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};
	cancelAnimationFrame = function(id) {
		clearTimeout(id);
	};
}

class Game {
	constructor() {
		this.players = [];

		//Physijs.worker = require("./../modules/physijs/physijs-worker");
		this.scene = new Physijs.Scene();

		this._pdt = 0.0001;
		this._pdte = new Date().getTime();

		this.local_time = 0.016;
		this._dt = new Date().getTime();
		this._dte = new Date().getTime();

		this.dt = 0;
		this.lastframetime = 0;
		this.updateid = -1;
	}

	start() {
		this.create_timer();

		this.lastTime = new Date().getTime();
		this.updateRate = 60.0;
		this.ns = 1000.0 / this.updateRate;
		this.timer = new Date().getTime();
		this.delta = 0;
		this.frames = 0;
		this.updates = 0;
		this.fps = 0;
		this.ups = 0;

		var ambLight = new THREE.AmbientLight(0xffffff, 0.1);
		this.scene.add(ambLight);

		var dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
		dirLight.position.x = 0;
		dirLight.position.y = 1;
		dirLight.position.z = -0.8;
		this.scene.add(dirLight);

		this.scene.setGravity(new THREE.Vector3(0, 0, 0));

		this.updateid = requestAnimationFrame(this.gameloop.bind(this));
	}

	stop() {
		cancelAnimationFrame(this.updateid);
	}

	create_timer() {
		setInterval(
			function() {
				this._dt = new Date().getTime() - this._dte;
				this._dte = new Date().getTime();
				this.local_time += this._dt / 1000.0;
			}.bind(this),
			4
		);
	}

	addPlayer(player) {
		if (typeof player.model !== "undefined") this.scene.add(player.model);
		if (typeof player.nametag !== "undefined") this.scene.add(player.nametag);
		this.players[player.id] = player;
	}

	getPlayer(id) {
		return this.players[id];
	}

	removePlayer(id) {
		if (typeof this.players[id].model !== "undefined") this.scene.remove(this.players[id].model);
		if (typeof this.players[id].nametag !== "undefined") this.scene.remove(this.players[id].nametag);

		delete this.players[id];
	}

	gameloop(t) {
		this.now = new Date().getTime();
		this.delta += (this.now - this.lastTime) / this.ns;
		this.lastTime = this.now;

		while (this.delta >= 1) {
			this.update();
			this.updates++;
			this.delta--;
		}

		this.render();
		this.frames++;

		if (new Date().getTime() - 1000 > this.timer) {
			this.timer += 1000;
			this.ups = this.updates;
			this.fps = this.frames;
			this.updates = 0;
			this.frames = 0;
			this.tick();
		}

		this.updateid = requestAnimationFrame(this.gameloop.bind(this));
	}

	tick() {
		if (typeof this.tick_func === "function") {
			this.tick_func(this.tick_cls);
		}

		if (this.ups < 50) {
			console.warn("THE TICKRATE IS CURRENTLY AT " + this.ups + " TICKS/s");
		}

		if (this.fps < 50) {
			console.warn("THE FRAMERATE IS CURRENTLY AT " + this.ups + " FRAMES/s");
		}
	}

	update() {
		if (typeof this.update_func === "function") {
			this.update_func(this.delta, this.update_cls);
		}

		for (var key in this.players) {
			if (this.players.hasOwnProperty(key)) {
				this.players[key].update(this.delta);
			}
		}
	}

	render() {
		if (typeof this.render_func === "function") {
			this.render_func(this.delta, this.render_cls);
		}

		this.scene.simulate();

		for (var key in this.players) {
			if (this.players.hasOwnProperty(key)) {
				this.players[key].render(this.delta);
			}
		}
	}

	setTickCallback(func, cls) {
		this.tick_func = func;
		this.tick_cls = cls;
	}

	setUpdateCallback(func, cls) {
		this.update_func = func;
		this.update_cls = cls;
	}

	setRenderCallback(func, cls) {
		this.render_func = func;
		this.render_cls = cls;
	}
}

module.exports = Game;
