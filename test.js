'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes');

describe("Test User Input", function() {

  it("Checks if the user enters a negative number", function() {
      var n = -1;
      var actual = lib.sumofprimes(n);
      var expected = false;
      assert( actual == expected);
  });

  it("Checks if the user enter 1 ", function(){
      var n = 1;
      var actual = lib.sumofprimes(n);
      var expected = false;
      assert(actual == expected);
  });


  it("Checks if the user enters a positive number greater than 1", function(){
      var n = 31;
      var actual = lib.sumofprimes(n);
      assert(actual);
  });

  it("Checks if the user enters a floating point number", function(){
    var n = 4.5;
    var actual = lib.sumofprimes(n);
    var expected = false;
    assert(actual == expected);
  });

  it("Checks if the user enters a String", function(){
      var n = "five"
      var actual = lib.sumofprimes(n);
      var expected = false;
      assert(actual==expected);
  });


  it("Checks for null", function(){
      var n = null;
      var actual = lib.sumofprimes(null);
      var expected = false;
      assert(actual==expected)
  });


    it("Checks if the user enters zero", function(){
      var n = 0;
      var actual = lib.sumofprimes(0);
      var expected = false;
      assert(actual==expected);
  });


  it("Checks if the user enters an array",function(){
      var n = [4,5,9];
      var actual = lib.sumofprimes(n);
      var expected = false;
      assert(actual==expected);
  });

  it("Checks to see if the user enters a boolean", function(){
      var n = true;
      var actual = lib.sumofprimes(n);
      var expected = false;
      assert(actual==expected);
  });

  });

  
  describe("Test Correctness of Sum of Primes Method", function() {

  it("Should return 0 for an input of 1", function() {
    var n = 1;
    var actual = lib.sumofprimes(n);
    var expected = 0;
    assert(actual===expected);
  });


  it("Should return 14 for an input of 10", function() {
    var n = 10;
    var actual = lib.sumofprimes(10);
    var expected = 17;
    assert(actual===expected);
  });

  it("Should return 1060 for an input of 100", function(){
    var n = 100;
    var actual = lib.sumofprimes(n);
    var expected = 1060;
    assert(actual===expected);
  });


  });
