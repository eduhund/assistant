const fetch = require("node-fetch");
const fs = require("fs");
const { bot } = require("../services/telegram/telegram");
const { Input } = require("telegraf");

async function sendFileToStorage(url, path) {
	return new Promise((resolve, reject) => {
		try {
			const file = fs.createWriteStream(path);
			fetch(url, {method: "GET", headers: {
				"Authorization": "Bearer " + process.env.SLACK_TOKEN
			}})
			.then(response => response.body.pipe(file));

			file.on("finish", () => {
				file.close();
				resolve()
			});
		} catch (e) {
			log.warn("File didn't save to Google Drive\n", e);
			reject()
		}
	})
}

async function getTelegramFileUrl(att) {
	const fileId = att[att.length - 1]?.file_id || att?.file_id || undefined;
	if (!fileId) {
		return;
	}
	try {
		const fileUrl = await bot.telegram.getFileLink(fileId);
		const pathArray = fileUrl.pathname.split(".")
		const type = pathArray[pathArray.length-1]
		const filePath = `files/${Date.now()}.${type}`
		sendFileToStorage(fileUrl, filePath);
		return fileUrl;
	} catch {
		throw new Error("");
	}
}

async function getSlackFileUrl(file) {
	if (!file) {
		return;
	}
	try {
		const pathArray = file.url.split(".")
		const type = pathArray[pathArray.length-1]
		const filePath = `files/${Date.now()}.${type}`
		await sendFileToStorage(file.url, filePath);
		const buffer = fs.readFileSync(filePath);
		return Input.fromBuffer(buffer)
	} catch (e) {
		console.log(e)
	}

}

module.exports = { getTelegramFileUrl, getSlackFileUrl };
