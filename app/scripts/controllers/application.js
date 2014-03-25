'use strict';

angular.module('angularWarmupApp').controller('ApplicationController', function($scope) {
  $scope.menu = [{
    'title': 'Home',
    'link': '/'
  }, {
    'title': 'Blocked',
    'link': '#/blocked'
  }];
});
