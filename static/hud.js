"use strict";

class HUD {
	constructor() {}

	setPerformanceInfo(values) {
		this.setSpanValue("fps", values.fps);
		this.setSpanValue("ups", values.ups);
	}

	setPosition(position) {
		this.setSpanValue("position.x", position.x.toFixed(2));
		this.setSpanValue("position.y", position.y.toFixed(2));
		this.setSpanValue("position.z", position.z.toFixed(2));
	}

	updatePlayerList(players) {
		var el = document.getElementById("player_list");
		el.innerHTML = "<h1>Player List</h1>";
		for (var key in players) {
			if (players.hasOwnProperty(key)) {
				this.addPlayerToList(players[key]);
			}
		}
	}

	addPlayerToList(el, player) {
		if (typeof player === "undefined") return;
		if (typeof player.model === "undefined") return;
		if (typeof player.model.position === "undefined") return;

		var player_html = '<div class="player">' + '	<h2 id="username">Username</h3>' + "	<h3>Position: </h3>" + '	<div class="position">' + "		<h4>X: <span>" + player.model.position.x.toFixed(2) + "</span></h4>" + "		<h4>Y: <span>" + player.model.position.y.toFixed(2) + "</span></h4>" + "		<h4>Z: <span>" + player.model.position.z.toFixed(2) + "</span></h4>" + "	</div>" + "</div>";

		el.innerHTML = el.innerHTML + player_html;
	}

	setSpanValue(id, value) {
		var el = document.getElementById(id);
		if (typeof value !== "undefined" && typeof el !== "undefined") {
			el.innerText = value;
		}
	}

	render() {}
}

module.exports = HUD;
