import polynomial from './polynomial';

export default function laguerre(n, alpha) {
  if (n === 0) return polynomial([1]);
  if (n === 1) return polynomial([1 + alpha, -1]);

  const k = n - 1;
  const l1 = polynomial([2 * k + 1 + alpha, -1]).m(laguerre(k, alpha));
  const l2 = polynomial([-(k + alpha)]).m(laguerre(k - 1, alpha));

  return (l1.a(l2)).s(1 / n);
}

