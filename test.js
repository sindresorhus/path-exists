import test from 'ava';
import {pathExists, pathExistsSync} from './index.js';

test('async', async t => {
	t.true(await pathExists('test.js'));
	t.false(await pathExists('fail'));
});

test('sync', t => {
	t.true(pathExistsSync('test.js'));
	t.false(pathExistsSync('fail'));
});
