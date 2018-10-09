var path = require('path');
var expect = require('chai').expect;

var fizzbuzz = require(path.join(__dirname, '..', './fizzbuzz.js'));

describe('fizzbuzz()', function () {
  'use strict';

  it('exists', function () {
    expect(fizzbuzz).to.be.a('function');
  });

  it('calculate if dividable by 3', function () {
    expect(fizzbuzz([4, 3, 6, 30, 10, 12])).to.deep.equal([4, 3, 3, 0, 5, 3]);
  });

  // Add more assertions here
});
