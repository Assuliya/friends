myApp.controller('IndexController', [ '$scope', 'FriendFactory', function ($scope, FriendFactory) {
  $scope.friends = [];
  function getAndAssignFriends(){
    FriendFactory.get()
    .then(function(serverResponse){
      console.log(serverResponse.data)
      $scope.friends = serverResponse.data
    })
    .catch(function(error){
      console.log(error)
    })
  }
  getAndAssignFriends();

  $scope.delete = function(id){
    FriendFactory.delete(id)
    .then(getAndAssignFriends)
  }
}]);
