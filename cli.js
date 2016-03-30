#! /usr/bin/env node
const usage = `
Usage:
	path-exists [--not] <path>

Options:
	-n --not         Negates the existence of the path.
	-h --help        Show this screen.
	-v --version     Show version.
`;

const options = require('docopt').docopt(usage, {
	version: require('./package').version
});

const fn = require('./');
fn(options['<path>']).then(function (exists) {
	exists = options['--not'] ? !exists : exists;
	process.exit(exists ? 0 : 1);
});
