Error.stackTraceLimit = Infinity;

require("console-stamp")(console, "HH:MM:ss.l");

console.log("Starting the server.");

var express = require("express");
var http = require("http");
var path = require("path");
var socketIO = require("socket.io");
var app = express();
var http = http.Server(app);
var io = socketIO(http);

const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const compiler = webpack(webpackConfig);

app.enable("trust proxy");
app.set("port", 80);
app.set("ip", "0.0.0.0");
app.use("/modules", express.static(__dirname + "/modules"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/physijs", express.static(__dirname + "/node_modules/nodejs-physijs/nodejs/browser/"));

app.get("/", function(request, response) {
	response.sendFile(path.join(__dirname, "index.html"));
});

var Server = new (require("./static/server"))(http, io, app);
Server.start();
