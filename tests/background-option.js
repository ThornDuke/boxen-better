import test from 'ava';
import boxenb from '../index.js';

test('backgroundColor option', t => {
  const box = boxenb('foo', { backgroundColor: 'red' });

  t.snapshot(box);
});

test('backgroundColor hex', t => {
  const box = boxenb('foo', { backgroundColor: '#FF0000' });

  t.snapshot(box);
});

test('throws on unexpected backgroundColor', t => {
  t.throws(() => {
    boxenb('foo', { backgroundColor: 'dark-yellow' });
  });
});
