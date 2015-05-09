angular.module('starter')
.controller('FacebookLoginController', ['$scope', '$log', '$cordovaFacebook',
  function($scope, $log, $cordovaFacebook) {

    var _this = this;
    var accessToken = null;

    _this.loginWithFacebook = function () {
      $cordovaFacebook.login(['public_profile', 'email', 'user_friends']).then(function(response) {
        $log.log(response);
        return $cordovaFacebook.api('me', ['public_profile']);
      }).then(function(response) {
        $log.log(response);
        $scope.isAuthenticated = true;
        $scope.username = response.name;
      }).catch(function(cause) {
        $log.log(cause);
        $scope.isAuthenticated = false;
      });
    };

    _this.logout = function () {
      $cordovaFacebook.logout().then(function(response) {
        $log.log(response);
        $scope.username = null;
        $scope.isAuthenticated = false;
      }).catch(function(cause) {
        $log.log(cause);
      });
    };

}]);
