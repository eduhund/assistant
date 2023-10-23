const { log } = require("../../services/log/log");

function processModals(context, data) {
	try {
		switch (context) {
			default: return
		}
	} catch (e) {
		log.warn("Error in modal process:", e);
		return;
	}
}

module.exports = { processModals };
