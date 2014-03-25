'use strict';

angular.module('angularWarmupApp')
.controller('FriendsController', function($scope, $modal, friends) {

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

  // Opens the modal with the add friend form
  $scope.open = function () {

    // Creates a model instance with the supplied properties.
    // The scope in the controller is a newly created child scope.
    var modalInstance = $modal.open({
      templateUrl: 'views/addFriendModal.html',
      controller: function($scope, $modalInstance) {
        $scope.tempFriend = {};

        $scope.addFriend = function() {
          $modalInstance.close($scope.tempFriend);
        };

        $scope.cancel = function() {
          $modalInstance.dismiss('Canceled adding a friend');
        };
      }
    });

    // Wow promises :)
    modalInstance.result.then(function(friend) {
      friends.addFriend(friend);
    })
    .catch(function(reason) {
      console.log('The modal was dismissed because: ' + reason);
    });
  };
});
