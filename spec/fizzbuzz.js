var path = require('path');
var expect = require('chai').expect;

var fizzbuzz = require(path.join(__dirname, '..', './fizzbuzz.js'));

describe('fizzbuzz()', function () {
  'use strict';

  it('exists', function () {
    expect(fizzbuzz).to.be.a('function');
  });

  it('calculate if dividable by 3', function () {
    expect(fizzbuzz(6)).to.equal(3);
  });

  it('calculate if divisable by 5', function () {
    expect(fizzbuzz(20)).to.equal(5);
  });

  it('calculate if divisable by 5 and 3', function () {
    expect(fizzbuzz(15)).to.equal(0);
  });

  it('ignores all other integers', function () {
    expect(8).to.equal(8);
  });

  it('null check', function () {
    expect(fizzbuzz()).to.equal(0);
  })

  // Add more assertions here
});
