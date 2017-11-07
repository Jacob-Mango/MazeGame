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
		for (var key in players) {
			if (players.hasOwnProperty(key)) {
				el.innerHTML = el.innerHTML + this.addPlayerToList(players[key]);
			}
		}
	}

	addPlayerToList(player) {
		if (!player || player.has_loaded == false) {
			return "";
		} else {
			var player_html = {};

			player_html[1] = "<div class='player'>";
			player_html[2] = "  <h2 id='username'>" + player.name + "</h3>";
			player_html[3] = "  <h3>Position: </h3>";
			player_html[4] = "	<div class='position'>";
			player_html[5] = "		<h4>X: <span>" + player.model.position.x.toFixed(2) + "</span></h4>";
			player_html[6] = "		<h4>Y: <span>" + player.model.position.y.toFixed(2) + "</span></h4>";
			player_html[7] = "		<h4>Z: <span>" + player.model.position.z.toFixed(2) + "</span></h4>";
			player_html[8] = "	</div>";
			player_html[9] = "</div>";

			var html = "";
			for (var i = 0; i < player_html.length; i++) {
				html = html + player_html[i];
			}
			return html;
		}
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
