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
		var div = document.getElementById("player_list");
		var html = "";
		for (var key in players) {
			if (players.hasOwnProperty(key)) {
				html += this.addPlayerToList(players[key]);
			}
		}
		div.innerHTML = html;
	}

	addPlayerToList(player) {
		var position = { x: 0, y: 0, z: 0 };
		if (player.model) position = player.model.position;

		var player_html = [];

		var b = 0;
		player_html[b++] = "<div class='player'>";
		player_html[b++] = "	<h2 id='username'>" + player.name + "</h3>";
		player_html[b++] = "	<input type='checkbox'>"
		player_html[b++] = "	<div class='moreinfo'>";
		player_html[b++] = "		<h3>Position: </h3>";
		player_html[b++] = "		<div class='position'>";
		player_html[b++] = "			<h4>X: <span>" + position.x.toFixed(2) + "</span></h4>";
		player_html[b++] = "			<h4>Y: <span>" + position.y.toFixed(2) + "</span></h4>";
		player_html[b++] = "			<h4>Z: <span>" + position.z.toFixed(2) + "</span></h4>";
		player_html[b++] = "		</div>";
		player_html[b++] = "	</div>";
		player_html[b++] = "</div>";

		let string = "";
		for (var i = 0; i < player_html.length; i++) {
			if (typeof player_html[i] === "undefined" || player_html[i] === null) continue;
			string += player_html[i];
		}
		return string;
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
