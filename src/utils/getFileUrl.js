const fetch = require("node-fetch");
const fs = require("fs");
const { bot } = require("../services/telegram/telegram");

async function sendFileToStorage(url) {
	return new Promise((resolve, reject) => {
		try {
			const pathArray = url.split(".")
			const type = pathArray[pathArray.length-1]
			const filePath = `files/${Date.now()}.${type}`

			const file = fs.createWriteStream(filePath);
			fetch(url, {method: "GET", headers: {
				"Authorization": "Bearer " + process.env.SLACK_TOKEN
			}})
			.then(response => response.body.pipe(file));

			file.on("finish", () => {
				file.close(filePath);
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
		const filePath = await sendFileToStorage(fileUrl.pathname);
		return fs.readFileSync(filePath);
	} catch {
		throw new Error("");
	}
}

async function getSlackFileUrl(file) {
	if (!file) {
		return;
	}
	try {
		const filePath = await sendFileToStorage(file.url);
		return fs.readFileSync(filePath);
	} catch (e) {
		console.log(e)
	}
}

module.exports = { getTelegramFileUrl, getSlackFileUrl };
