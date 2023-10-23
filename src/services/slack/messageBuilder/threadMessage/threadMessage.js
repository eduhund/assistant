function threadMessage({ from, to, message }) {
	const { firstName, lastName } = from;
	const { text } = message;
	const informerMessage = `${firstName} ${lastName}: ${text}`;
	return {
		channel: to.channelId,
		text: informerMessage,
		thread_ts: to.threadId,
		blocks: [
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: text || " "
				},
			},
		],
	};
}

module.exports = { threadMessage };
