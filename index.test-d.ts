import { expectType } from 'tsd';
import boxenb, { type Spacing, type CustomBorderStyle } from './index.js';

const border: CustomBorderStyle = {
  topLeft: ' ',
  topRight: ' ',
  bottomLeft: ' ',
  bottomRight: ' ',
  top: ' ',
  bottom: ' ',
  left: ' ',
  right: ' ',
};

const spacing: Spacing = {
  top: 1,
  right: 0,
  bottom: 1,
  left: 0,
};

expectType<string>(boxenb('better'));
expectType<string>(boxenb('better', { title: 'title' }));
expectType<string>(boxenb('better', { title: 'title', titleAlignment: 'center' }));
expectType<string>(boxenb('better', { borderColor: 'green' }));
expectType<string>(boxenb('better', { borderColor: '#ff0000' }));
expectType<string>(boxenb('better', { borderStyle: 'double' }));
expectType<string>(boxenb('better', { borderStyle: border }));
expectType<string>(boxenb('better', { dimBorder: true }));
expectType<string>(boxenb('better', { padding: 3 }));
expectType<string>(boxenb('better', { padding: spacing }));
expectType<string>(boxenb('better', { margin: 3 }));
expectType<string>(boxenb('better', { margin: spacing }));
expectType<string>(boxenb('better', { float: 'center' }));
expectType<string>(boxenb('better', { backgroundColor: 'green' }));
expectType<string>(boxenb('better', { backgroundColor: '#ff0000' }));
expectType<string>(boxenb('better', { textAlignment: 'right' }));
expectType<string>(boxenb('better', { width: 20 }));
expectType<string>(boxenb('better', { height: 5 }));
expectType<string>(boxenb('better', { fullscreen: true }));
