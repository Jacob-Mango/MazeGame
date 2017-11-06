"use strict";

var THREE = require("./../modules/three");
var Ammo = require("./../modules/ammo");
var Physijs = require("./../modules/physi")(THREE, Ammo);

class Renderer {
  constructor() {
    this.WC = 0;
    this.HC = this.WC;
    this.WIDTH = window.innerWidth - this.WC;
    this.HEIGHT = window.innerHeight - this.HC;

    this.VIEW_ANGLE = 90;
    this.ASPECT = this.WIDTH / this.HEIGHT;
    this.NEAR = 0.1;
    this.FAR = 10000;

    this.createContext();
  }

  createContext() {
    this.container = document.getElementById("container");

    this.webGLrenderer = new THREE.WebGLRenderer();
    this.webGLrenderer.setSize(this.WIDTH, this.HEIGHT);
    this.container.appendChild(this.webGLrenderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      this.VIEW_ANGLE,
      this.ASPECT,
      this.NEAR,
      this.FAR
    );

    window.addEventListener("resize", this.resize.bind(this), false);
  }

  resize() {
    this.WIDTH = window.innerWidth - this.WC;
    this.HEIGHT = window.innerHeight - this.HC;

    this.ASPECT = this.WIDTH / this.HEIGHT;
    this.camera.aspect = this.ASPECT;
    this.camera.updateProjectionMatrix();

    this.webGLrenderer.setSize(this.WIDTH, this.HEIGHT);
  }

  toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  setCameraPosition(position) {
    this.camera.position.set(position.x, position.y, position.z);
    this.camera.rotation.set(this.toRadians(-15), 0, 0);
  }

  render(scene) {
    this.webGLrenderer.render(scene, this.camera);
  }
}

module.exports = Renderer;
