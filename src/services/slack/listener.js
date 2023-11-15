const { log } = require("../../services/log/log");

const { listener } = require("./slack");
const { processContext } = require("@processes/processContext/processContext");
const { getSlackContext } = require("../../utils/getContext");
const { incomingData } = require("./dataProcessor");

function slackListenerRun() {
	listener.message(async ({ payload }) => {
		log.debug("Slack — New message: ", payload);
		const data = await incomingData(payload);
		const context = getSlackContext(payload);
		await processContext(context, data);
	});
}

module.exports = { slackListenerRun };
