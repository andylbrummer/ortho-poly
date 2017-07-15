import polynomial from './polynomial';

export default function chebyshev(n) {
  if (n === 0) return polynomial([1]);
  if (n === 1) return polynomial([0, 1]);
  const f1 = polynomial([0, 2]).m(chebyshev(n - 1));
  return f1.sub(chebyshev(n - 2));
}
