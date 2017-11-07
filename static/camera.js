"use strict";

var THREE = require("./../modules/three");

Number.prototype.clamp = function(min, max) {
	return Math.min(Math.max(this, min), max);
};

class Camera {
	constructor() {
		this.previousFollowPosition = { x: 0, y: 0, z: 0 };
		this.followPosition = { x: 0, y: 0, z: 0 };

		this.tCamera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.dx = 0;
		this.dy = 0;
		this.dz = 0;
	}

	lerp(a, b, f) {
		return a * (1.0 - f) + b * f;
	}

	update(dt) {
		var lerp = 0.05;

		var nx = (this.followPosition.z - this.dz).clamp(0, 2);
		var nz = 64 - Math.abs(this.followPosition.x - this.dx) * nx;

		this.dx += (this.followPosition.x - this.dx) * lerp * dt;
		this.dy += (this.followPosition.y - this.dy) * lerp * dt;
		this.dz += (this.followPosition.z - this.dz) * lerp * dt;

		this.tCamera.position.set(this.dx, this.dy + 16, this.dz + nz);
		this.tCamera.lookAt(new THREE.Vector3(this.followPosition.x, this.followPosition.y, this.followPosition.z));
	}

	setPlayerPosition(position) {
		this.previousFollowPosition = this.followPosition;
		this.followPosition = position;
	}
}

module.exports = Camera;
