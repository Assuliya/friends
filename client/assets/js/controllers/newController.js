myApp.controller('NewController', [ '$scope', 'FriendFactory', '$location', function ($scope, FriendFactory, $location) {

  $scope.createFriend = function(){
      FriendFactory.create($scope.newFriend)
      .then(function(serverResponse){
        console.log(serverResponse.data)
        $scope.newFriend = {};
        $location.path('/')
      })
      .catch(function(error){
        console.log(error)
      })
    };
}]);
