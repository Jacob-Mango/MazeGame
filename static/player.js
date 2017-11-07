"use strict";

var THREE = require("./../modules/three");
var Ammo = require("./../modules/ammo");
var Physijs = require("./../modules/physi")(THREE, Ammo);

class Player {
	constructor(id, name, position, isOwningPlayer, isServer) {
		this.id = id;
		this.name = name;
		this.isOwningPlayer = isOwningPlayer;
		this.isServer = isServer === "undefined" ? false : isServer;

		if (typeof position === "undefined") position = { x: 0, y: 0, z: 0 };
		if (typeof position.x === "undefined") position.x = 0;
		if (typeof position.y === "undefined") position.y = 0;
		if (typeof position.z === "undefined") position.z = 0;

		this.serverPosition = position;
		this.previousServerPostion = position;
		this.velocity = { x: 0, y: 0, z: 0 };
		this.lastPositionTime = 0;

		this.nametag = undefined;
		this.has_loaded = false;
	}

	createNametag() {
		var cnv = document.createElement("canvas");
		cnv.width = 4096;
		cnv.height = 1024;

		var ctx = cnv.getContext("2d");
		ctx.font = "Bold 128px Arial";
		ctx.fillStyle = "rgba(200,200,230,0.8)";
		ctx.textAlign = "center";
		ctx.fillText(this.name, 4096 / 2, 128);

		var txt = new THREE.Texture(cnv);
		txt.needsUpdate = true;

		var mat = new THREE.MeshBasicMaterial({
			map: txt,
			side: THREE.DoubleSide
		});
		mat.transparent = true;

		this.nametag = new THREE.Mesh(new THREE.PlaneGeometry(cnv.width, cnv.height), mat);
		var scale = 0.025;
		this.nametag.scale.set(scale, scale, scale);
	}

	createModel(game) {
		var model = new Physijs.BoxMesh(new THREE.CubeGeometry(15, 15, 15), new THREE.MeshNormalMaterial(), 1);
		model.position.set(this.serverPosition.x, this.serverPosition.y, this.serverPosition.z);

		var self = this;
		model.addEventListener("collision", function(other_model) {
			var psp = self.previousServerPostion;
			self.velocity.x = -self.velocity.x;
			self.velocity.y = -self.velocity.y;
			self.velocity.z = -self.velocity.z;
			self.model.position.set(psp.x, psp.y, psp.z);

			return true;
		});

		model.addEventListener("rayTrace", function(hitData) {
			console.log(hitData.hasHit);
			if (hitData.hasHit) {
				model.can_move = false;
			} else {
				model.can_move = true;
			}
		});

		model.addEventListener("ready", function() {
			model.can_move = true;
			model.player_data = this;
		});

		this.has_loaded = true;
		this.model = model;
	}

	distanceVector(v1, v2) {
		var dx = v1.x - v2.x;
		var dy = v1.y - v2.y;
		var dz = v1.z - v2.z;

		return Math.sqrt(dx * dx + dy * dy + dz * dz);
	}

	lerp(a, b, f) {
		return a * (1.0 - f) + b * f;
	}

	update(dt) {
		if (typeof this.nametag !== "undefined") {
			this.nametag.position.x = this.model.position.x;
			this.nametag.position.y = this.model.position.y + 7;
			this.nametag.position.z = this.model.position.z + 10;
		}

		if (typeof this.model !== "undefined") {
			if (this.model.can_move) {
				this.model.position.x += this.velocity.x / 100;
				this.model.position.y += this.velocity.y / 100;
				this.model.position.z += this.velocity.z / 100;

				this.model.__dirtyPosition = true;
			}

			var friction = 0.1;
			this.velocity.x *= friction;
			this.velocity.y *= friction;
			this.velocity.z *= friction;
		}
	}

	render(dt) {
		if (this.isServer) {
			this.serverPosition.x = this.model.position.x;
			this.serverPosition.y = this.model.position.y;
			this.serverPosition.z = this.model.position.z;
		} else {
			var currentPosition = new THREE.Vector3(this.model.position.x, this.model.position.y, this.model.position.z);

			if (this.isOwningPlayer) {
				if (this.distanceVector(currentPosition, this.serverPosition) > 5) {
					this.model.position.set(this.serverPosition.x, this.serverPosition.y, this.serverPosition.z);
					this.model.__dirtyPosition = true;
				}
			} else {
				var dtx = (new Date().getTime() - this.lastPositionTime) / 1000.0 + 1;
				var dx = this.lerp(this.previousServerPostion.x, this.serverPosition.x, dtx);
				var dy = this.lerp(this.previousServerPostion.y, this.serverPosition.y, dtx);
				var dz = this.lerp(this.previousServerPostion.z, this.serverPosition.z, dtx);

				this.model.position.set(dx, dy, dz);
				this.model.__dirtyPosition = true;
			}
		}
	}

	move(dir, scene) {
		var speed = 50;

		this.velocity.x += dir.x * speed;
		this.velocity.y += dir.y * speed;
		this.velocity.z += dir.z * speed;

		if (scene) {
			var From = {};
			From.x = this.model.position.x;
			From.y = this.model.position.y;
			From.z = this.model.position.z;

			var Size = {};
			Size.x = 0; // Math.sign(this.velocity.x) * 15 * 0.5;
			Size.y = 0; // Math.sign(this.velocity.y) * 15 * 0.5;
			Size.z = 0; // Math.sign(this.velocity.z) * 15 * 0.5;

			var To = {};
			To.x = this.model.position.x + this.velocity.x / 100 + Size.x;
			To.y = this.model.position.y + this.velocity.y / 100 + Size.y;
			To.z = this.model.position.z + this.velocity.z / 100 + Size.z;

			scene.rayTrace(this.model, { from: From, to: To });
		}
	}

	setServerPosition(position, lastPositionTime) {
		if (this.isServer || lastPositionTime > this.lastPositionTime) {
			this.lastPositionTime = lastPositionTime;

			this.previousServerPostion.x = this.serverPosition.x;
			this.previousServerPostion.y = this.serverPosition.y;
			this.previousServerPostion.z = this.serverPosition.z;

			this.serverPosition.x = position.x;
			this.serverPosition.y = position.y;
			this.serverPosition.z = position.z;
		}
	}

	getPosition() {
		return {
			x: this.serverPosition.x,
			y: this.serverPosition.y,
			z: this.serverPosition.z
		};
	}

	formatJSON() {
		return {
			name: this.name,
			position: this.getPosition()
		};
	}
}

module.exports = Player;
