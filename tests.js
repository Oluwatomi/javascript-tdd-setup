'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test User Input", function() {

  it("Checks if the user enters a negative number", function() {
      var n = -1;
      var actual = isprime(n);
      var expected = false;
      assert( actual == expected);
  });

  it("Checks if the user enter 1 ", function(){
      var n = 1;
      var actual = isprime(n);
      var expected = false;
      assert(actual == expected);
  });


  it("Checks if the user enters a positive number greater than 1", function(){
      var n = 31;
      var actual = isprime(n);
      assert(actual);
  });

  it("Checks if the user enters a floating point number", function(){
    var n = 4.5;
    var actual = isprime(n);
    var expected = false;
    assert(actual == expected);
  });


  it("Checks if the user enters a large number", function(){
    var n = 1000000000;
    var actual = isprime(n);
    var expected = false;
    assert(actual == expected);
  });


  it("Checks if the user enters a String", function(){
      var n = "five"
      var actual = isprime(n);
      var expected = false;
      assert(actual==expected);
  });


  it("Checks for null", function(){
      var n = null;
      var actual = isprime(null);
      var expected = false;
      assert(actual==expected)
  });
  
    
  });

  
  