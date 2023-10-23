const { web } = require("../../slack");
const { log } = require("../../../../services/log/log");

async function sendFileToSlack({ from, to, message, data }) {
	try {
		await web.files.upload({file: message.att.buffer, channels: to.channelId, thread_ts: to.threadId})
  } catch (e) {
    log.warn("File wasn't uploaded")
  }
}

module.exports = { sendFileToSlack };