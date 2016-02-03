var app = angular.module('application', []);

app.controller('githubCtrl', function($scope, $http) {
       var userName;
       $scope.post = function(user){
            userName = user.name;
            $http.get("https://api.github.com/users/" + userName)
              .then(function(response) {
                $scope.data = response.data;
                $scope.finalId = response.data.id;
              });
        }
  });