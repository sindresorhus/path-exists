'use strict';
var test = require('ava');
var pathExists = require('./');

test('async', function (t) {
	t.plan(2);

	pathExists('test.js', function (err, exists) {
		t.assert(exists);
	});

	pathExists('fail', function (err, exists) {
		t.assert(!exists);
	});
});

test('sync', function (t) {
	t.assert(pathExists.sync('test.js'));
	t.assert(!pathExists.sync('fail'));
	t.end();
});
