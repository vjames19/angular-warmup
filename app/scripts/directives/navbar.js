'use strict';

angular.module('angularWarmupApp').directive('vjNavbar', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/navbar.html',
    scope: {
      menuItems: '='
    },
    controller: function($scope, $location) {
      $scope.isActive = function(route) {
        return route === $location.path();
      };
    }
  };
});
