'use strict';

angular.module('angularWarmupApp').controller('BlockedController', function($scope, friends) {
  $scope.blocked = [];

  friends.getBlocked().then(function(blocked) {
    console.log('calling blocked');
    $scope.blocked = blocked;
  });

  $scope.unblock = function(index) {
    friends.unblockFriend(index);
  };
});
