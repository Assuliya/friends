myApp.controller('EditController', ['$scope', 'FriendFactory', '$routeParams', '$location', function ($scope, FriendFactory, $routeParams, $location) {
    FriendFactory.show($routeParams.id)
    .then(function(serverResponse){
      $scope.friend = serverResponse.data
      console.log($scope.friend)
    })
    $scope.updateFriend = function(){
      FriendFactory.update($routeParams.id, $scope.friend)
      .then( function(){
        $location.path('/');
      })
    }
}]);
