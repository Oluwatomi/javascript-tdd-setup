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



  });

  
  