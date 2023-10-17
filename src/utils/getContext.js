function getTelegramContext(message, botContext) {
	const text = (message || "").toLowerCase();
	if (botContext) {
		switch (botContext) {
			default:
				return "tManual";
		}
	}
	if (text === "• инструкция •") {
		return "tOrientation"
	}
	return "tManual";
}

function getSlackContext(message) {
	if (
		(message?.subtype === undefined || message?.subtype === "file_share") &&
		!message?.text.includes("<@U") &&
		message?.thread_ts
	) {
		return "sAnswer";
	}
	return undefined;
}

module.exports = { getTelegramContext, getSlackContext };
