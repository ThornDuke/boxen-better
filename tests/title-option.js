import test from 'ava';
import boxenb from '../index.js';

test('title option works', t => {
  const box = boxenb('foo', {
    title: 'title',
  });

  t.snapshot(box);
});

test('title align left', t => {
  const box = boxenb('foo bar foo bar', {
    title: 'title',
    titleAlignment: 'left',
  });

  t.snapshot(box);
});

test('title align center', t => {
  const box = boxenb('foo bar foo bar', {
    title: 'title',
    titleAlignment: 'center',
  });

  t.snapshot(box);
});

test('title align right', t => {
  const box = boxenb('foo bar foo bar', {
    title: 'title',
    titleAlignment: 'right',
  });

  t.snapshot(box);
});

test('long title expands box', t => {
  const box = boxenb('foo', {
    title: 'very long title',
  });

  t.snapshot(box);
});

test('title + width option', t => {
  // Not enough space, no title
  t.snapshot(
    boxenb('foo', {
      title: 'very long title',
      width: 3,
    })
  );

  // Space for only one character
  t.snapshot(
    boxenb('foo', {
      title: 'very long title',
      width: 5,
    })
  );

  t.snapshot(
    boxenb('foo', {
      title: 'very long title',
      width: 20,
    })
  );
});

test('title option with border style (none)', t => {
  const box = boxenb('foo', {
    title: 'title',
    borderStyle: 'none',
  });

  t.snapshot(box);
});
