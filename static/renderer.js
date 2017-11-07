"use strict";

var THREE = require("./../modules/three");
var Ammo = require("./../modules/ammo");
var Physijs = require("./../modules/physi")(THREE, Ammo);

class Renderer {
	constructor() {}

	createContext(camera) {
		this.container = document.getElementById("container");

		this.webGLrenderer = new THREE.WebGLRenderer();
		this.container.appendChild(this.webGLrenderer.domElement);

		this.camera = camera;

		this.resize();

		window.addEventListener("resize", this.resize.bind(this), false);
	}

	resize() {
		this.WIDTH = window.innerWidth;
		this.HEIGHT = window.innerHeight;

		this.ASPECT = this.WIDTH / this.HEIGHT;
		this.camera.aspect = this.ASPECT;
		this.camera.updateProjectionMatrix();

		this.webGLrenderer.setSize(this.WIDTH, this.HEIGHT);
	}

	render(scene) {
		this.webGLrenderer.render(scene, this.camera);
	}
}

module.exports = Renderer;
