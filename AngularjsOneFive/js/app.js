(function() {
    var app = angular.module('BookStoreApp', ['ui.router']);
    app.controller('BooksController', function($scope, $http) {
        $http.get('js/data.json')
            .then(function(res) {
                $scope.booksData = res.data;
            });
    });

    app.config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('list',{
          url: '/',
          templateUrl: 'list.html'
        })
        .state('tab',{
          url: '/tab',
          templateUrl: 'tab.html'
        })
    });
})();
