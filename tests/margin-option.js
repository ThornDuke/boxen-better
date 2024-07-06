import process from 'node:process';
import test from 'ava';
import boxenb from '../index.js';

test('margin option works', t => {
  const box = boxenb('foo', {
    margin: 2,
  });

  t.snapshot(box);
});

test('margin option with custom margins', t => {
  const box = boxenb('foo', {
    margin: {
      top: 1,
      left: 2,
      right: 3,
      bottom: 4,
    },
  });

  t.snapshot(box);
});

test('margin option with padding', t => {
  const box = boxenb('foo', {
    margin: 1,
    padding: 1,
  });

  t.snapshot(box);
});

test('margin proportionally decreases when content <= columns', t => {
  // Plenty space
  let box = boxenb('x'.repeat(process.env.COLUMNS / 2 - 2), {
    margin: 2,
  });

  t.snapshot(box);

  // A bit of space
  box = boxenb('x'.repeat(process.env.COLUMNS - 6 - 2), {
    margin: 2,
  });

  t.snapshot(box);

  // No room
  box = boxenb('ax'.repeat(process.env.COLUMNS - 2), {
    margin: 2,
  });

  t.snapshot(box);
});

test('margin option with border style (none)', t => {
  const box = boxenb('foo', {
    margin: {
      top: 1,
      bottom: 1,
      left: 1,
      right: 1,
    },
    borderStyle: 'none',
  });

  t.snapshot(box);
});
