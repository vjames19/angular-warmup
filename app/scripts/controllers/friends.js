'use strict';

angular.module('angularWarmupApp').controller('FriendsController', function($scope, friends) {

  // Fetch friends
  friends.getFriends().then(function(friends) {
    $scope.friends = friends;
  });

  $scope.tempFriend = {};

  $scope.addFriend = function() {
    friends.addFriend($scope.tempFriend);
  };

  $scope.blockFriend = function(index) {
    friends.blockFriend(index);
  };

  $scope.ratingSelected = function(rating) {
    console.log(rating);
  };
});
