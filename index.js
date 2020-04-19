'use strict';
const fs = require('fs');

module.exports = async path => {
	try {
		await fs.promises.access(path);
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
