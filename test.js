import test from 'ava';
import fn from './';

test('async - pass', async t => {
	t.true(await fn('test.js'));
});

test('async - fail', async t => {
	t.false(await fn('fail'));
});

test('sync', t => {
	t.true(fn.sync('test.js'));
	t.false(fn.sync('fail'));
});
