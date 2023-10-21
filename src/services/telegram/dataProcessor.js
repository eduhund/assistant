const { log } = require("../../services/log/log");
const { getTelegramFileUrl } = require("../../utils/getFileUrl");

async function getAttachData(data) {
	const {photo, sticker, video, video_note, audio, voice, document} = data

	const imageUrl =
	photo || sticker ? await getTelegramFileUrl(photo || sticker) : undefined;
	const media = video || video_note || audio || voice || document;
	const docUrl = media ? await getTelegramFileUrl(media) : undefined;

	return {
		image: imageUrl,
		document: docUrl,
	}
}

function getFromData(data) {
	if (typeof data?.from !== "object") {
		throw new Error("Broken Telegram data: missing parameter 'from'")
	} 

	const {id, username, first_name, last_name, language_code} = data.from

	return {
		userId: id,
		username: username,
		firstName: first_name,
		lastName: last_name,
		lang: language_code,
	}
}

async function getMessageData(data) {
	const {id, message, message_id, date, edit_date, text, caption} = data

	return {
		id: message?.message_id || message_id,
		cbId: id,
		date: date,
		editDate: edit_date,
		text: text || caption || data?.data || " ",
		att: getAttachData(data),
	}
}

async function incomingData(data) {
	try {
		return {
			from: getFromData(data),
			message: await getMessageData(data),
		};
	} catch (e) {
		log.warn("Error with parsing incoming message!\n", e);
		return {};
	}
}

module.exports = { incomingData };
