import process from 'node:process';
import test from 'ava';
import boxenb from '../index.js';

test('float option (left)', t => {
  const box = boxenb('foo', {
    float: 'left',
  });

  t.snapshot(box);
});

test('float option (center)', t => {
  const box = boxenb('foo', {
    float: 'center',
  });

  t.snapshot(box);
});

test('float option (right)', t => {
  const box = boxenb('foo', {
    float: 'right',
  });

  t.snapshot(box);
});

test('float option (center) with margin', t => {
  const box = boxenb('foo', {
    float: 'right',
    margin: {
      left: 3,
      top: 4,
    },
  });

  t.snapshot(box);
});

test('float option (right) with margin', t => {
  const box = boxenb('foo', {
    float: 'right',
    margin: {
      right: 2,
      bottom: 5,
    },
  });

  t.snapshot(box);
});

test('float option (center) when content > columns', t => {
  const longContent = 'foobar'.repeat(process.env.COLUMNS);

  t.notThrows(() => {
    boxenb(longContent, {
      float: 'center',
    });
  });

  const box = boxenb(longContent, {
    float: 'center',
  });

  t.snapshot(box);
});

test('float option (right) when content > columns', t => {
  const longContent = 'foobar'.repeat(process.env.COLUMNS);

  t.notThrows(() => {
    boxenb(longContent, {
      float: 'right',
    });
  });

  const box = boxenb(longContent, {
    float: 'right',
  });

  t.snapshot(box);
});
