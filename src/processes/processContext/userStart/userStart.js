const { log } = require("../../../services/log/log");
const getDBRequest = require("@mg/requests");
const getActionQuery = require("../../../utils/actionsQueries");
const { sendMessageToTelegram } = require("@tg/actions/actions");

const DEFAULT_NAME = "человек";

async function userStart({ from }) {
	try {
		const now = Date.now();
		const user = await getDBRequest("getUserInfo", {
			query: { userId: from.userId },
		});

		if (user) {
			from.email = user.email;
			sendMessageToTelegram({
				to: from,
				intent: "startExist",
				lang: from.lang,
				data: {
					firstName: from.firstName || DEFAULT_NAME,
				},
			});

			if (user?.blocked)
				getDBRequest("updateUserInfo", {
					query: { userId: from.userId },
					data: { blocked: false },
				});
		} else {
			sendMessageToTelegram({
				to: from,
				intent: "startNew",
				lang: from.lang,
			});

			getDBRequest("addUser", {
				query: {
					userId: from.userId,
					username: from.username,
					firstName: from.firstName,
					lastName: from.lastName,
					subscribeDate: {
						$date: {
							$numberLong: now,
						},
					},
					blocked: false,
					lang: from.lang,
				},
			});
		}

		getDBRequest("addAction", getActionQuery(1, "student", from.userId));
		return { OK: true, newBotContext: from.email ? undefined : "changeEmail" };
	} catch (e) {
		log.warn("Error while processing user start.\n", e);
		return { OK: false, newBotContext: undefined };
	}
}

module.exports = { userStart };
