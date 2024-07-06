import test from 'ava';
import boxenb from '../index.js';

test('height option works', t => {
  // Creates a tall box with empty rows
  t.snapshot(
    boxenb('foo', {
      height: 5,
    })
  );

  // Creates a 1 line box, cropping the other lines
  t.snapshot(
    boxenb('foo bar\nfoo bar', {
      height: 3,
    })
  );
});

test('height option with padding + margin', t => {
  // Creates a wide box for little text
  const box = boxenb('foo', {
    height: 20,
    margin: 2,
    padding: 1,
  });

  t.snapshot(box);
});

test('height option with width', t => {
  // Creates a wide box for little text
  const box = boxenb('foo', {
    height: 5,
    width: 20,
  });

  t.snapshot(box);
});

test('height option with width + padding + margin', t => {
  // Creates a wide box for little text
  const box = boxenb('foo', {
    height: 5,
    width: 20,
    margin: 2,
    padding: 1,
  });

  t.snapshot(box);
});

test('height option with border style (none)', t => {
  const box = boxenb('foo', {
    height: 3,
    borderStyle: 'none',
  });

  t.snapshot(box);
});
