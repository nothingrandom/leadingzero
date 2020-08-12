const leadingzero = (num, zero = '2', char = '0') => {
  if (zero < 0) {
    throw new SyntaxError('leadingzero requires a positive integer for number of leading zeros');
  }

  const prefix = num < 0 ? '-' : '';
  const number = Math.abs(parseFloat(num));
  return prefix + String(number).padStart(zero, char);
};

export default leadingzero;
