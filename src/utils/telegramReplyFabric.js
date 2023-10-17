const { getPhrase } = require("@assets/dict/dict");

const KEYBOARDS = {
	orientation({ lang }) {
		return {
			inline_keyboard: [
				[
					{
						text: getPhrase(lang, "orientationButton"),
						url: "https://docs.google.com/document/d/1B03UrUb0BLdtZewBRoUh2OyDZbSlBYJDSY9bzBIRwNg",
					},
				],
			],
		};
	},
};

function getKeyboard(lang, intent, data) {
	if (KEYBOARDS[intent]) {
		return KEYBOARDS[intent]({ lang, data });
	} else return undefined;
}

module.exports = { getKeyboard };
