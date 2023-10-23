const { log } = require("../../services/log/log");

function processActions(context, data) {
	try {
		switch (context) {
			default: return;
		}
	} catch (e) {
		log.warn("Error in action process:", e);
		return;
	}
}

module.exports = { processActions };
