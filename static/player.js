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
	}

	createNametag() {
		var canvas1 = document.createElement("canvas");
		canvas1.width = 4096;
		canvas1.height = 1024;

		var context1 = canvas1.getContext("2d");
		context1.font = "Bold 128px Arial";
		context1.fillStyle = "rgba(200,200,230,0.8)";
		context1.fillText(this.name, 0, 128);

		var texture1 = new THREE.Texture(canvas1);
		texture1.needsUpdate = true;

		var material1 = new THREE.MeshBasicMaterial({
			map: texture1,
			side: THREE.DoubleSide
		});
		material1.transparent = true;

		this.nametag = new THREE.Mesh(
			new THREE.PlaneGeometry(canvas1.width, canvas1.height),
			material1
		);
		var s = 0.025;
		this.nametag.scale.set(s, s, s);
	}

	createModel(game) {
		var model = new Physijs.BoxMesh(
			new THREE.CubeGeometry(15, 15, 15),
			new THREE.MeshNormalMaterial(),
			1
		);
		//var model = new THREE.Mesh(new THREE.CubeGeometry(15, 15, 15), new THREE.MeshNormalMaterial());
		model.position.set(
			this.serverPosition.x,
			this.serverPosition.y,
			this.serverPosition.z
		);

		model.can_move = true;
		model.player_data = this;

		model.addEventListener('collision', function (other_object) {
			console.log(this.can_move + " | " + other_object.can_move);

			return true;
		});

		model.addEventListener("ready", function () {
			//model.setAngularFactor(new THREE.Vector3(0, 0, 0));

			//var linearDamping = 0.9;
			//var angularDamping = 0.1;
			//model.setDamping(linearDamping, angularDamping);
			model._physijs.collision_flags = model._physijs.collision_flags | 2;
		});

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
			this.nametag.position.x = this.model.position.x + 32;
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

			//this.model.setLinearVelocity(
			//	new THREE.Vector3(this.velocity.x, this.velocity.y, this.velocity.z)
			//);

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
			var currentPosition = new THREE.Vector3(
				this.model.position.x,
				this.model.position.y,
				this.model.position.z
			);

			if (this.isOwningPlayer) {
				if (this.distanceVector(currentPosition, this.serverPosition) > 5) {
					this.model.position.set(
						this.serverPosition.x,
						this.serverPosition.y,
						this.serverPosition.z
					);

					//this.model.setLinearVelocity(new THREE.Vector3(0, 0, 0));
					//this.model.setAngularVelocity(new THREE.Vector3(0, 0, 0));

					this.model.__dirtyPosition = true;
				}
			} else {
				var dtx = (new Date().getTime() - this.lastPositionTime) / 1000.0 + 1;
				console.log(dtx);
				var dx = this.lerp(
					this.previousServerPostion.x,
					this.serverPosition.x,
					dtx
				);
				var dy = this.lerp(
					this.previousServerPostion.y,
					this.serverPosition.y,
					dtx
				);
				var dz = this.lerp(
					this.previousServerPostion.z,
					this.serverPosition.z,
					dtx
				);

				this.model.position.set(dx, dy, dz);

				//this.model.setLinearVelocity(new THREE.Vector3(0, 0, 0));
				//this.model.setAngularVelocity(new THREE.Vector3(0, 0, 0));

				this.model.__dirtyPosition = true;
			}
		}
	}

	move(dir) {
		var speed = 50;

		this.velocity.x += dir.x * speed;
		this.velocity.y += dir.y * speed;
		this.velocity.z += dir.z * speed;
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
