import test from 'ava';
import leadingzero from '..';

test('Just a number', (t) => {
  t.is(leadingzero(5), '05');
});

test('James Bond', (t) => {
  t.is(leadingzero(7, 3), '007');
});

test('Strings', (t) => {
  t.is(leadingzero('13', 3), '013');
});

test('Short 1234', (t) => {
  t.is(leadingzero(1234, 2), '1234');
});

test('15 characters', (t) => {
  t.is(leadingzero(5, 15), '000000000000005');
});

test('20 characters', (t) => {
  t.is(leadingzero(2, 20), '00000000000000000002');
});

test('Negatives', (t) => {
  t.is(leadingzero(-3, 3), '-003');
});

test('Different character', (t) => {
  t.is(leadingzero(5616, 12, '*'), '********5616');
});
