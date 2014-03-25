'use strict';

angular.module('angularWarmupApp').filter('reverse', function() {

  /**
   * First parameter when used in a view will be passed automatically. To use the second parameter
   * use it in the following way {{ binding | reverse:'true' }}
   * @param  {String} string      String to reverse.
   * @param  {*} toUpperCase      If the string needs to be uppercased too.
   * @return {String}             The reversed string and optionally uppercased.
   */
  return function(string, toUpperCase) {
    if(string) {
      var reversed = '';
      for (var i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
      }

      if(toUpperCase) {
        reversed = reversed.toUpperCase();
      }

      return reversed;
    }
  };
});
