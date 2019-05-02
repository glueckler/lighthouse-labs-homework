var assert = require('chai').assert;
var maxProfit = require('../max');

describe('max-profit', function() {

  it('Should return 16 for [45, 24, 35, 31, 40, 38, 11]', () => {
    const input = [45, 24, 35, 31, 40, 38, 11];
    assert.isTrue( maxProfit(input) === 16 )
  });

  it('Should return 16 for [2, 18, 10, 2]', () => {
    assert.isTrue( maxProfit( [2, 18, 10, 2] ) === 16);
  });

  it('Should return 21 for [0, 20, 1, 21]', () => {
    assert.isTrue( maxProfit( [0, 20, 1, 21] ) === 21);
  });

  it('Should return 101 for [5, 15, 0, 50, 101]', () => {
    assert.isTrue( maxProfit([5, 15, 0, 50, 101]) === 101 )
  })

});