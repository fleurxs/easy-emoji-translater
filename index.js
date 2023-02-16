const fs = require('fs');

class EasyEmojiTranslater {
	constructor() { }

	static setLanguage(lang = 'ru-RU') {
		this.lang = lang;
		this.langFileName = `${this.lang}.json`;
		this.langFilePath = `./languages/${this.lang}.json`;

		if (!fs.existsSync(this.langFilePath)) {
			throw new Error('Language not found!');
		}

		this.langFile = require(this.langFilePath);
	}

	static toText(emoji, options = {}) {
		if (!this.lang) {
			this.setLanguage();
		}

		for (const key in this.langFile) {
			if (Object.hasOwnProperty.call(this.langFile, key) && emoji === key) {
				if (options.shortName) {
					return this.langFile[key].shortName;
				}

				return Object.assign({ emoji: key }, this.langFile[key]);
			}
		}

		return null;
	}

	static toEmoji(text, options = {}) {
		if (!this.lang) {
			this.setLanguage();
		}

		text = text.toLowerCase();

		for (const key in this.langFile) {
			if (Object.hasOwnProperty.call(this.langFile, key) && text === this.langFile[key].shortName) {
				if (options.shortName) {
					return key;
				}

				return Object.assign({ emoji: key }, this.langFile[key]);
			}
		}

		return null;
	}

	static textContains(text, options = {}) {
		const result = [];

		for (const key in this.langFile) {
			if (Object.hasOwnProperty.call(this.langFile, key)) {
				if ('object' === typeof text) {
					if (text.test(this.langFile[key].shortName)) {
						result.push(Object.assign({ emoji: key }, this.langFile[key]));
					}
				} else if ('string' === typeof text) {
					if (-1 !== this.langFile[key].shortName.indexOf(text)) {
						result.push(Object.assign({ emoji: key }, this.langFile[key]));
					}
				}
			}
		}

		return result;
	}
}

module.exports = EasyEmojiTranslater;