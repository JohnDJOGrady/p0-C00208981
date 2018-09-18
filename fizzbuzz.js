/*! fizzbuzz v0.0.0 - MIT license */
'use strict';

var fizzbuzz = function (n) {

  if(n % 3 == 0 && n % 5==0){
    n = 0;
  }
  else if(n % 3 == 0){
     n = 3;
  }
  else if(n % 5 == 0){
    n = 5;
  }
  else if(n == null)
  {
    n = 0;
  }
  return n;
}

if ( typeof module !== "undefined" ) {
  module.exports = fizzbuzz;
}