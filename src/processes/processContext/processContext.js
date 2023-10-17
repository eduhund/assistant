const { log } = require("../../services/log/log");

const { userStart } = require("./userStart/userStart");
const { userHelp } = require("./userHelp/userHelp");
const { userCancel } = require("./userCancel/userCancel");
const {
	forwardMessageToSlack,
} = require("./forwardMessageToSlack/forwardMessageToSlack");
const { answerToStudent } = require("./answerToStudent/answerToStudent");

function processContext(context, data, botContext) {
	try {
		switch (context) {
			case "tStart":
				return userStart(data);
			case "tHelp":
				return userHelp(data);
			case "tCancelButton":
				return userCancel(data);
			case "tManual":
				return forwardMessageToSlack(data);
			case "sAnswer":
				return answerToStudent(data);
		}
	} catch (e) {
		log.warn("Error in context process:", e);
		return;
	}
}

module.exports = { processContext };
