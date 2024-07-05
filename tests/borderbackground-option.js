import test from 'ava';
import boxen from '../index.js';

test('borderBackgroundColor option', t => {
  const box = boxen('foo', { borderBackgroundColor: 'yellow' });

  t.snapshot(box);
});

test('borderBackgroundColor hex', t => {
  const box = boxen('foo', { borderBackgroundColor: '#FFFF00' });

  t.snapshot(box);
});

test('throws on unexpected borderBackgroundColor', t => {
  t.throws(() => {
    boxen('foo', { borderBackgroundColor: 'dark-yellow' });
  });
});