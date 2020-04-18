'use strict';
const fs = require('fs');

const fsP = fs.promises;

module.exports = async path => {
	try {
		await fsP.access(path);
		return true;
	} catch (_) {
		return false;
	}
};

module.exports.sync = path => {
	try {
		fs.accessSync(path);
		return true;
	} catch (_) {
		return false;
	}
};
