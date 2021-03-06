// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
	sumofprimes: function(p) {
		
		function isPrime(n) {
		// if n is not a number, return false
		if(isNaN(n)){return false;}
	
		// If n is less than 2 or not an integer then by definition cannot be prime.
    	if (n < 2) {return false;}
    	if (n != Math.round(n)) {return false;}

    	// Assume that n is prime
    	var isPrime = true;

    	// Now for every whole number from 2 to the square root of n. If any of these numbers divides n exactly, n cannot be prime.
    	for (var i = 2; i <= Math.sqrt(n); i++) {
    		if (n % i == 0) {isPrime = false;}
    	}

    	// Finally return whether n is prime or not.
    	return isPrime;
    	}

    	
    	function sumof(n){
    		var sum = 0;
    		if(n==0)
    		{
    			return sum;
    		}
    		else if (n < 1 || isNaN(n))
    		{
    			return "Invalid Input"
    		}
    		else
    		{
    			for (var i = 1; i <= n; i++) {
      				if(isPrime(i))
      				{
      					sum += i;
            		}
        		}
        		return sum;
    		}	
        }

        
        var x = sumof(p);
        if( p > 0 && Number.isInteger(p) === true ){
            return x;
        }
        else{
            return false;
        }
        
      
      	
	}

}






		


  