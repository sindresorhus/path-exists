'use strict';
var test = require('ava');
var pathExists = require('./');

test('async - pass', function (t) {
	return pathExists('test.js').then(function (exists) {
		t.true(exists);
	});
});

test('async - fail', function (t) {
	return pathExists('fail').then(function (exists) {
		t.false(exists);
	});
});

test('sync', function (t) {
	t.true(pathExists.sync('test.js'));
	t.false(pathExists.sync('fail'));
	t.end();
});
