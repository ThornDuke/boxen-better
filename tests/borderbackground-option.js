import test from 'ava';
import boxenb from '../index.js';

test('borderBackgroundColor option', t => {
  const box = boxenb('foo', { borderBackgroundColor: 'yellow' });

  t.snapshot(box);
});

test('borderBackgroundColor hex', t => {
  const box = boxenb('foo', { borderBackgroundColor: '#FFFF00' });

  t.snapshot(box);
});

test('throws on unexpected borderBackgroundColor', t => {
  t.throws(() => {
    boxenb('foo', { borderBackgroundColor: 'dark-yellow' });
  });
});
