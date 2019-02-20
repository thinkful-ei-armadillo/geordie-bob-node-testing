'use strict';

const expect = require('chai').expect;
const sort = require('../app');

describe('Sort Function', () => {
  it('should return an array', () => {
    expect(sort([1,2,3])).to.be.an('Array');
  });
  it('should have negatives come before positives', () => {
    const a = 1;
    const b = 2;
    const c = -3;
    const expected = [-3, 1, 2];

    const actual = sort([a, b, c]);

    expect(actual).to.deep.equal(expected);
  });
  it('should sort all indecies', () => {
    const a = 10,
      b = 9,
      c = 5,
      d = 7,
      e = 6,
      f = 0,
      expected = [0, 5, 6, 7, 9, 10];
    const actual = sort([a,b,c,d,e,f]);
    //found logical error, does not test every index value in the while loop
    expect(actual).to.deep.equal(expected);
  });
});