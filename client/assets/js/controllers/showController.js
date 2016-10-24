myApp.controller('ShowController', ['$scope', 'FriendFactory', '$routeParams', function ($scope, FriendFactory, $routeParams) {
  function getUserById(id){
    FriendFactory.show(id)
    .then(function(serverResponse){
      $scope.friend = serverResponse.data
      console.log($scope.friend)
    })
  }
  getUserById($routeParams.id)
}]);
