import test from 'ava';
import m from './';

test('async', async t => {
	t.true(await m('test.js'));
	t.false(await m('fail'));
});

test('sync', t => {
	t.true(m.sync('test.js'));
	t.false(m.sync('fail'));
});
