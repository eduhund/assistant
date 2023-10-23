const { log } = require("../../../services/log/log");
const getDBRequest = require("@mg/requests");
const { sendMessageToSlack, sendFileToSlack } = require("@sl/actions/actions");
const { sendMessageToTelegram } = require("@tg/actions/actions");

const channelId = process.env.SLACK_CHANNEL;

async function forwardMessageToSlack({ from, message }) {
	try {
		const now = Date.now();

		const thread = await getDBRequest("getThread", {
			query: { userId: from.userId, active: true },
		});

		const to = {
			channelId,
			threadId: thread?.threadId,
		};

		const threadId = await sendMessageToSlack({
			from,
			to,
			message,
		});

		const newMessage = {
			userId: from.userId,
			source: "telegram",
			dest: "slack",
			role: "user",
			text: message.text,
			ts: now,
		};

		if (!to.threadId) {
			const newThread = {
				...newMessage,
				threadId,
				active: true,
				talk: [],
				lastIncMessage: now,
			};
			getDBRequest("createThread", { query: newThread });

			sendMessageToTelegram({
				to: from,
				intent: "newThread",
				lang: from.lang,
			});
		} else {
			getDBRequest("updateThread", {
				query: { threadId, active: true },
				data: { lastOutMessage: now, newMessage },
			});

			getDBRequest("addToHistory", {
				query: {
					...newMessage,
					threadId,
				},
			});
		}

		if (message.att?.buffer) {
			to.threadId = to.threadId || threadId
			sendFileToSlack({
				from,
				to,
				message,
			})
		}

		return { OK: true, newBotContext: undefined };
	} catch (e) {
		log.warn("Error with processing forward user message to Slack.\n", e);
		return { OK: false, newBotContext: undefined };
	}
}

module.exports = { forwardMessageToSlack };
