"use strict";

var THREE = require("./../modules/three");

Number.prototype.clamp = function(min, max) {
	return Math.min(Math.max(this, min), max);
};

class Camera {
	constructor() {
		this.followPosition = { x: 0, y: 0, z: 0 };

		this.tCamera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.dx = this.followPosition.x;
		this.dy = this.followPosition.y;
		this.dz = this.followPosition.z;
	}

	lerp(a, b, f) {
		return a * (1.0 - f) + b * f;
	}

	update(dt) {
		var lerp = 0.025;

		var nx = (this.followPosition.z - this.dz).clamp(0, 0.2);
		var nz = 90; // - Math.abs(this.followPosition.x - this.dx) * nx;

		this.dx += (this.followPosition.x - this.dx) * lerp * dt;
		this.dy += (this.followPosition.y - this.dy) * lerp * dt;
		this.dz += (this.followPosition.z - this.dz) * lerp * dt;

		this.tCamera.position.set(this.dx, this.dy + 25, this.dz + nz);
		this.tCamera.rotation.set(-18 / 180.0 * Math.PI, 0, 0);
		// this.tCamera.lookAt(new THREE.Vector3(this.dx, this.dy + 8, this.dz));
	}

	setPlayerPosition(position) {
		this.followPosition = position;
	}
}

module.exports = Camera;
