import polynomial from './polynomial';

export default function hermite(n) {
  if (n === 0) return polynomial([1]);
  if (n === 1) return polynomial([0, 2]);

  const k = n - 1;
  const f1 = polynomial([0, 2]).m(hermite(k));
  const f2 = hermite(k - 1).s(-2 * k);

  return f2.a(f1);
}
