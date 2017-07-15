import polynomial from './polynomial';

export default function chebyshev2(n) {
  if (n === 0) return polynomial([1]);
  if (n === 1) return polynomial([0, 2]);
  const f1 = polynomial([0, 2]).m(chebyshev2(n - 1));
  return f1.sub(chebyshev2(n - 2));
}
