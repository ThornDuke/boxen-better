import test from 'ava';
import boxenb from '../index.js';

test('fullscreen option', t => {
  const box = boxenb('foo', {
    fullscreen: true,
  });

  t.snapshot(box);
});

test('fullscreen option + width', t => {
  const box = boxenb('foo', {
    fullscreen: true,
    width: 10,
  });

  t.snapshot(box);
});

test('fullscreen option + height', t => {
  const box = boxenb('foo', {
    fullscreen: true,
    height: 10,
  });

  t.snapshot(box);
});

test('fullscreen option with callback', t => {
  const box = boxenb('foo', {
    fullscreen: (width, height) => [width - 2, height - 2],
  });

  t.snapshot(box);
});
