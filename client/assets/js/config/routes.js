var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/index.html',
        controller: 'IndexController'
    })
    .when('/friends/:id/edit',{
        templateUrl: 'partials/edit.html',
        controller: 'EditController'
    })
    .when('/friends/:id',{
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
    })
    .when('/new',{
        templateUrl: 'partials/new.html',
        controller: 'NewController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
