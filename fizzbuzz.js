/*! fizzbuzz v0.0.0 - MIT license */
'use strict';

var fizzbuzz = function (list) {

  var ls = list;
  for(var i = 0; i < ls.length; i++)
  {
    if(ls[i] % 3 == 0 && ls[i] % 5==0){
      ls[i] = 0;
    }
    else if(ls[i] % 3 == 0){
      ls[i] = 3;
    }
    else if(ls[i] % 5 == 0){
      ls[i] = 5;
    }
    else{
      ls[i] = ls[i];
    }
  }

  return ls;
}

if ( typeof module !== "undefined" ) {
  module.exports = fizzbuzz;
}