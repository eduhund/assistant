const { log } = require("../../services/log/log");
const express = require("express");

// Read a server port from the environment variables
const port = process.env.SERVER_PORT || 8000;

// Initialize
const server = express();

server.use("/files", express.static("files"))

// Start function
function start() {
	return new Promise((resolve, reject) => {
		server.listen(port, (err) => {
			if (err) {
				return reject(err);
			}
			log.info("Server starts on port", port);
			return resolve();
		});
	});
}

module.exports = { start };
