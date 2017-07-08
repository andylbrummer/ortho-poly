import glFloat from './glFloat';

export default function polynomial(v) {
  return {
    v,
    f(x) {
      const il = v.length;
      if (il === 0) return 0;
      if (il === 1) return v[0];
      let r = v[il - 1] * x + v[il - 2];
      for (let i = il - 2; i--;) {
        r = r * x + v[i];
      }
      return r;
    },
    a: function a(p) {
      const n = [];
      const v2 = p.v;
      const max = Math.max(v.length, v2.length);
      for (let i = max; i--;) {
        n[i] = (v[i] || 0) + (v2[i] || 0);
      }
      return polynomial(n);
    },
    // Subtract two polynomials
    sub: function sub(p) {
      const n = [];
      const v2 = p.v;
      const max = Math.max(v.length, v2.length);
      for (let i = max; i--;) {
        n[i] = (v[i] || 0) - (v2[i] || 0);
      }
      return polynomial(n);
    },
    // Multiply two polynomials
    m: function m(p) {
      const n = [];
      const v2 = p.v;
      for (let i = v.length; i--;) {
        for (let j = v2.length; j--;) {
          n[i + j] = (n[i + j] || 0) + v[i] * v2[j];
        }
      }
      return polynomial(n);
    },
    // multiply by a scalar
    s(s) {
      const n = [];
      for (let i = v.length; i--;) {
        n[i] = s * v[i];
      }
      return polynomial(n);
    },
    // Multiply the underlying variable by a scalar factor and apply it to the polynomial
    // ie 3(2x)^2-(2x)^3 = 12x^2-8x^3
    ps(s) {
      const n = [];
      let m = 1;
      for (let i = v.length; i--;) {
        n[i] = m * v[i];
        m *= s;
      }
      return polynomial(n);
    },
    // Calculate the derivative of the polynomial
    dx() {
      const n = [];
      for (let i = v.length; i-- > 0;) {
        n[i - 1] = i * v[i];
      }
      return polynomial(n);
    },
    print() {
      const vl = v.length;
      let r = '';
      let s = '';
      if (vl === 0) return '0';
      if (vl === 1) return v[0].toString();

      for (let i = vl; i--;) {
        const c = v[i];
        if (c === 0) continue;

        if (c >= 0) r += s;
        if (c !== 1 || i === 0) r += v[i].toString();

        if (i === 1) r += 'x';
        if (i !== 0 && i !== 1) r += `x<sup>${i.toString()}</sup>`;
        s = '+';
      }
      return r;
    },
    // Generate a string version of the polynomial in a format for webGL shaders.
    fx(constiable) {
      const vl = v.length;
      let r = '';
      if (vl === 0) return '0.0';
      if (vl === 1) return glFloat(v[0]);

      for (let i = vl - 2; i--;) {
        r += '(';
      }
      r += `${glFloat(v[vl - 1])}*${constiable}`;
      if (v[vl - 2] !== 0) r += `+${glFloat(v[vl - 2])}`;
      for (let i = vl - 2; i--;) {
        r += `)*${constiable}`;
        if (v[i] !== 0) r += `+${glFloat(v[i])}`;
      }
      return r;
    },
  };
}

