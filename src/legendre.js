import polynomial from './polynomial';

export default function legendre(n) {
  if (n === 0) return polynomial([1]);
  if (n === 1) return polynomial([0, 1]);

  const k = n - 1;
  const f1 = polynomial([0, 2 * k + 1]).m(legendre(k));
  const f2 = legendre(n - 2).s(-k);

  return f2.a(f1).s(1 / n);
}

