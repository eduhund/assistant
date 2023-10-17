const { log } = require("../../services/log/log");
const cron = require("node-cron");

function init() {
	log.info("Schedule initialized successful");
}

module.exports = { init };
