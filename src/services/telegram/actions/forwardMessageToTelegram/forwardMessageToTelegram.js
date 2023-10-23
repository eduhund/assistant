const { Input } = require("telegraf");
const { log } = require("../../../../services/log/log");

const { bot } = require("@tg/telegram");

async function forwardMessageToTelegram({ to, message }) {
	console.log("Here: ", message)
	const { userId } = to;
	const { text, att = [] } = message;
	if (att.length === 0) {
		await bot.telegram.sendMessage(userId, text);
	}
	if (att.length === 1) {
		const { type, buffer, url } = att[0];
		const file = Input.fromBuffer(buffer)
		switch (type) {
			case "png":
			case "jpg":
				await bot.telegram.sendPhoto(userId, file, {
					caption: text,
				});
				break;
			case "mpeg":
			case "mov":
			case "mp4":
				await bot.telegram.sendVideo(userId, file, {
					caption: text,
				});
				break;
			case "gif":
				await bot.telegram.sendAnimation(userId, file, {
					caption: text,
				});
				break;
			case "mp3":
				await bot.telegram.sendAudio(userId, file, {
					caption: text,
				});
				break;
			case "ogg": 
				await bot.telegram.sendVoice(userId, file, {
					caption: text,
				});
				break;
			default:
				await bot.telegram.sendDocument(userId, file, {
					caption: text,
				});
		}
		log.debug("Telegram — Message has been forwarded: ", {
			to: userId,
			text,
			url,
		});
	}
}

module.exports = { forwardMessageToTelegram };
