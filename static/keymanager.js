"use strict";

class KeyManager {
	constructor() {
		this._pressed = {};

		window.addEventListener("keyup", this.onKeyup.bind(this), false);
		window.addEventListener("keydown", this.onKeydown.bind(this), false);

		this.KeyCodes = {
			LEFT: 65,
			UP: 87,
			RIGHT: 68,
			DOWN: 83,
			SPACE: 32
		};
	}

	isDown(keyCode) {
		return this._pressed[keyCode];
	}

	onKeydown(event) {
		this._pressed[event.keyCode] = true;
	}

	onKeyup(event) {
		delete this._pressed[event.keyCode];
	}
}

module.exports = KeyManager;
