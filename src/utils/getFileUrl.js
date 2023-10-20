const fetch = require("node-fetch");
const fs = require("fs");
const { bot } = require("../services/telegram/telegram");

async function sendFileToStorage(url, path) {
	return new Promise((resolve, reject) => {
		try {
			const file = fs.createWriteStream(path);
			fetch(url,	{method: "GET", headers: {
				"Authorization": process.env.SLACK_TOKEN
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

	const pathArray = file.url.split(".")
	const type = pathArray[pathArray.length-1]
	const filePath = `files/${Date.now()}.${type}`
	//sendFileToStorage(fileUrl, filePath);
	return "https://www.tehnomax.me/UserFiles/products/2023/001/large/17434.jpg" //`http://185.81.165.254:7777/${filePath}`;
}

module.exports = { getTelegramFileUrl, getSlackFileUrl };
