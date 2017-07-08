/**
 * ortho-poly
 *
 * Copyright © 2016 Andy Brummer. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import { laguerre, polynomial, legendre, hermite, chebyshev } from '../src/index';

describe('polynomial', () => {
  describe('Polynomial.print()', () => {
    it('polynomial.print()', () => {
      const p = polynomial([1, 1]);
      expect(p.print()).to.be.equal('x+1');
    });

    it('polynomial.print()', () => {
      const p = polynomial([-1, 1]);
      expect(p.print()).to.be.equal('x-1');
    });

    it('polynomial.print()', () => {
      const p = polynomial([1, -1]);
      expect(p.print()).to.be.equal('-1x+1');
    });

    it('polynomial.print()', () => {
      const p = polynomial([1, -1, 0, 4, -56]);
      expect(p.print()).to.be.equal('-56x<sup>4</sup>+4x<sup>3</sup>-1x+1');
    });
  });

  describe('Polynomial.laguerre()', () => {

    it('laguerre(0,0) should return 1', () => {
      const l = laguerre(0, 0);
      expect(l.print()).to.be.equal('1');
    });

    it('laguerre(1,0) should return -x+1', () => {
      const l = laguerre(1, 0);
      expect(l.print()).to.be.equal('-1x+1');
    });

    it('laguerre(2,0) should return (x^2-4x+2)/2', () => {
      const l = laguerre(2, 0);
      expect(l.s(2).print()).to.be.equal('x<sup>2</sup>-4x+2');
    });

    it('laguerre(3,0) should return (-x^3+9x^2-18x+6)/6', () => {
      const l = laguerre(3, 0);
      expect(l.s(6).print()).to.be.equal('-1x<sup>3</sup>+9x<sup>2</sup>-18x+6');
    });

    it('laguerre(4,0) should return (x^4-16x^3+72x^2-96x+24)/24', () => {
      const l = laguerre(4, 0);
      expect(l.s(24).print()).to.be.equal('x<sup>4</sup>-16x<sup>3</sup>+72x<sup>2</sup>-96x+24');
    });

    it('laguerre(0,1) should return 1', () => {
      const l = laguerre(0, 1);
      expect(l.print()).to.be.equal('1');
    });

    it('laguerre(1,1) should return -x+2', () => {
      const l = laguerre(1, 1);
      expect(l.print()).to.be.equal('-1x+2');
    });

    it('laguerre(2,1) should return (x^2-6x+6)/2', () => {
      const l = laguerre(2, 1);
      expect(l.print()).to.be.equal('0.5x<sup>2</sup>-3x+3');
    });

    it('laguerre(2,2) should return (x^2-8x+12)/2', () => {
      const l = laguerre(2, 2);
      expect(l.print()).to.be.equal('0.5x<sup>2</sup>-4x+6');
    });

    it('laguerre(3,1) should return (-x^3+12x^2-36x+24)/6', () => {
      const l = laguerre(3, 1);
      expect(l.s(6).print()).to.be.equal('-1x<sup>3</sup>+12x<sup>2</sup>-36x+24');
    });
  });

  describe('Polynomial.legendre()', () => {
    it('legendre(0) should return 1', () => {
      const l = legendre(0);
      expect(l.print()).to.be.equal('1');
    });

    it('legendre(1) should return 1', () => {
      const l = legendre(1);
      expect(l.print()).to.be.equal('x');
    });

    it('legendre(2) should return (3x^2-1)/2', () => {
      const l = legendre(2);
      expect(l.s(2).print()).to.be.equal('3x<sup>2</sup>-1');
    });

    it('legendre(3) should return (5x^3-3x)/2', () => {
      const l = legendre(3);
      expect(l.s(2).print()).to.be.equal('5x<sup>3</sup>-3x');
    });

    it('legendre(4) should return (35x^4-30x^2+3)/8', () => {
      const l = legendre(4);
      expect(l.s(8).print()).to.be.equal('35x<sup>4</sup>-30x<sup>2</sup>+3');
    });
  });

  describe('Polynomial.hermite()', () => {
    it('hermite(0) should return 1', () => {
      const l = hermite(0);
      expect(l.print()).to.be.equal('1');
    });

    it('hermite(1) should return 2x', () => {
      const l = hermite(1);
      expect(l.print()).to.be.equal('2x');
    });

    it('hermite(2) should return 4x^2-2', () => {
      const l = hermite(2);
      expect(l.print()).to.be.equal('4x<sup>2</sup>-2');
    });

    it('hermite(3) should return 8x^3-12x', () => {
      const l = hermite(3);
      expect(l.print()).to.be.equal('8x<sup>3</sup>-12x');
    });

    it('hermite(4) should return 16x^4-48x^2+12', () => {
      const l = hermite(4);
      expect(l.print()).to.be.equal('16x<sup>4</sup>-48x<sup>2</sup>+12');
    });
  });

  describe('Polynomial.chebyshev()', () => {
    it('chebyshev(0) should return 1', () => {
      const l = chebyshev(0);
      expect(l.print()).to.be.equal('1');
    });

    it('chebyshev(1) should return x', () => {
      const l = chebyshev(1);
      expect(l.print()).to.be.equal('x');
    });

    it('chebyshev(2) should return 2x^2-1', () => {
      const l = chebyshev(2);
      expect(l.print()).to.be.equal('2x<sup>2</sup>-1');
    });

    it('chebyshev(3) should return 4x^3-3x', () => {
      const l = chebyshev(3);
      expect(l.print()).to.be.equal('4x<sup>3</sup>-3x');
    });

    it('chebyshev(4) should return 8x^4-8x^2+1', () => {
      const l = chebyshev(4);
      expect(l.print()).to.be.equal('8x<sup>4</sup>-8x<sup>2</sup>+1');
    });
  });
});
