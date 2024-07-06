import test from 'ava';
import boxenb from '../index.js';

test('border color (red)', t => {
  const box = boxenb('foo', {
    borderColor: 'red',
  });

  t.snapshot(box);
});

test('border color (blue)', t => {
  const box = boxenb('foo', {
    borderColor: 'blue',
  });

  t.snapshot(box);
});

test('border color (green)', t => {
  const box = boxenb('foo', {
    borderColor: 'green',
  });

  t.snapshot(box);
});

test('border color (yellow + dim)', t => {
  const box = boxenb('foo', {
    borderColor: 'green',
    dimBorder: true,
  });

  t.snapshot(box);
});

test('border color (hex)', t => {
  const box = boxenb('foo', {
    borderColor: '#FF00FF',
    dimBorder: true,
  });

  t.snapshot(box);
});

test('throws on unexpected borderColor', t => {
  t.throws(() => {
    boxenb('foo', { borderColor: 'greasy-white' });
  });
});

test('border style (single)', t => {
  const box = boxenb('foo', {
    borderStyle: 'single',
  });

  t.snapshot(box);
});

test('border style (singleDouble)', t => {
  const box = boxenb('foo', {
    borderStyle: 'singleDouble',
  });

  t.snapshot(box);
});

test('border style (doubleSingle)', t => {
  const box = boxenb('foo', {
    borderStyle: 'doubleSingle',
  });

  t.snapshot(box);
});

test('border style (double)', t => {
  const box = boxenb('foo', {
    borderStyle: 'double',
  });

  t.snapshot(box);
});

test('border style (classic)', t => {
  const box = boxenb('foo', {
    borderStyle: 'classic',
  });

  t.snapshot(box);
});

test('border style (bold)', t => {
  const box = boxenb('foo', {
    borderStyle: 'bold',
  });

  t.snapshot(box);
});

test('border style (round)', t => {
  const box = boxenb('foo', {
    borderStyle: 'round',
  });

  t.snapshot(box);
});

test('border style (none)', t => {
  const box = boxenb('foo', {
    borderStyle: 'none',
  });

  t.snapshot(box);
});

test('border style (custom ascii style)', t => {
  const box = boxenb('foo', {
    borderStyle: {
      topLeft: '1',
      topRight: '2',
      bottomLeft: '3',
      bottomRight: '4',
      left: '|',
      right: '!',
      top: '-',
      bottom: '_',
    },
  });

  t.snapshot(box);
});

test('throws on unexpected borderStyle as string', t => {
  t.throws(() => {
    boxenb('foo', { borderStyle: 'shakenSnake' });
  });
});

test('throws on unexpected borderStyle as object', t => {
  t.throws(() => {
    boxenb('foo', { borderStyle: { shake: 'snake' } });
  });

  // Missing bottomRight
  const invalid = {
    topLeft: '1',
    topRight: '2',
    bottomLeft: '3',
    horizontal: '-',
    vertical: '|',
  };

  t.throws(() => {
    boxenb('foo', { borderStyle: invalid });
  });
});
