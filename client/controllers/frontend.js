var app = angular.module('angularTest', ['ui.router']);

app.factory('posts', [function() {
    var o = {
        posts: []
    };
    
    return o;
}]);

app.controller('mainController', [
    '$scope',
    'posts',
    '$http',
    '$location',
    function($scope, posts, $http, $location) {
        $scope.posts = posts.posts;
        
        $scope.posts = [];
        
        $scope.addPost = function() {
            if(!$scope.keyword || $scope.keyword === '') {
                return;
            } else {
              $http.get('/json', {params: {q: $scope.keyword}})
              .then(function(data) {
                console.log(data);
                $scope.keyword = '';
                $location.path('/compare');
              }, function() {
            
          });
            }
        };
    }
]);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'mainController'
        });
      
        $stateProvider.state('posts', {
            url: '/compare',
            templateUrl: '/compare.html',
            controller: 'compareController'
        });
    }
]);