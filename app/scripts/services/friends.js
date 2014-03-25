'use strict';

// Service types factory, service, value, constant. All of them are singletons.
angular.module('angularWarmupApp').service('friends', function($timeout) {
  var friends = [
    {name: 'Victor', lastName: 'Rodriguez', phone: '555-123-9999', rating: 3},
    {name: 'Miguel', lastName: 'Doe', phone: '555-456-9999', rating: 3},
    {name: 'Jose', lastName: 'Martinez', phone: '555-789-9999', rating: 3},
    {name: 'Rosa', lastName: 'Merleño', phone: '555-000-9999', rating: 0},
  ];

  // Simulate a server call with a delay of 100 ms
  this.getFriends = function() {
    // Returns a promise of the value
    return $timeout(function() {
      return friends;
    }, 100);
  };

  this.addFriend = function(friend) {
    friends.push(friend);
  };

  this.removeFriend = function(index) {
    friends.splice(index, 1);
  };
});
