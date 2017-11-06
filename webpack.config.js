var path = require("path");
var webpack = require("webpack");
var PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
	entry: {
		client: "./static/client.js"
	},
	output: {
		path: __dirname + "/static",
		filename: "bundle.js"
	},
	resolve: {
		// modules: [path.resolve(__dirname, "../src"), "node_modules"],
		alias: {
			//"socket.io-client": path.join(__dirname, "../", "node_modules", "socket.io-client", "socket.io.js")
		}
	},
	node: {
		__filename: true,
		fs: "empty"
	},
	plugins: [
		//new PrettierPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	]
};
