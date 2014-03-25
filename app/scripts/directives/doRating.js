'use strict';

angular.module('angularWarmupApp').directive('doRating', function() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'views/doRating.html',
    scope: {
      ratingValue: '=',
      max: '=',
      onRatingSelected: '&'
    },
    link: function(scope) {
      var updateStars = function() {
        scope.stars = [];
        for(var i=0; i < scope.max; i++) {
          scope.stars.push({filled: i < scope.ratingValue});
        }
      };
      // Initialize it
      updateStars();

      scope.toggle = function(index) {
        scope.ratingValue = index + 1;
        scope.onRatingSelected({rating: index + 1});
      };

      scope.$watch('ratingValue', function(oldValue, newValue) {
        if(newValue) {
          updateStars();
        }
      });
    }
  };
});
