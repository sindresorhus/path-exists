import test from 'ava';
import pathExists from '.';

test('async', async t => {
	t.true(await pathExists('test.js'));
	t.false(await pathExists('fail'));
});

test('sync', t => {
	t.true(pathExists.sync('test.js'));
	t.false(pathExists.sync('fail'));
});
