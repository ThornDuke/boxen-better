import test from 'ava';
import boxenb from '../index.js';

test('width option works', t => {
  // Creates a wide box for little text
  t.snapshot(
    boxenb('foo', {
      width: 20,
    })
  );

  // Creates a small box for a lot of text
  t.snapshot(
    boxenb('foo bar foo bar', {
      width: 10,
    })
  );
});

test('width option with padding + margin', t => {
  // Creates a wide box for little text
  const box = boxenb('foo', {
    width: 20,
    margin: 2,
    padding: 1,
  });

  t.snapshot(box);
});

test('width option with big padding', t => {
  // Should disable the paddings
  const box = boxenb('foo', {
    width: 6,
    padding: 3,
  });

  t.snapshot(box);
});

test('width option with border style (none)', t => {
  const box = boxenb('foo', {
    width: 3,
    borderStyle: 'none',
  });

  t.snapshot(box);
});
