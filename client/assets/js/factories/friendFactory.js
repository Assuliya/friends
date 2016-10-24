myApp.factory('FriendFactory', function ($http){
      var factory = {};
      factory.get = function(){
        return $http.get('/friends');
      }
      factory.show = function(id){
        return $http.get('/friends/'+ id)
       }
      factory.create = function(newFriend){
        return $http.post('/friends', newFriend)
       }
       factory.update = function(id, friend){
         return $http.put('/friends/'+id, friend)
        }
      factory.delete = function(id){
         return $http.delete('/friends/'+ id);
        }

      return factory;
  });
