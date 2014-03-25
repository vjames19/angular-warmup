'use strict';

angular.module('angularWarmupApp').controller('FriendsController', function($scope) {
  $scope.friends = [
    {name: 'Victor', lastName: 'Rodriguez', phone: '555-123-9999'},
    {name: 'Miguel', lastName: 'Doe', phone: '555-456-9999'},
    {name: 'Jose', lastName: 'Martinez', phone: '555-789-9999'},
    {name: 'Rosa', lastName: 'Merleño', phone: '555-000-9999'}
  ];

  $scope.tempFriend = {};

  $scope.addFriend = function() {
    $scope.friends.push(angular.copy($scope.tempFriend));

    $scope.tempFriend.name = null;
    $scope.tempFriend.lastName = null;
    $scope.tempFriend.phone = null;
  };
});
