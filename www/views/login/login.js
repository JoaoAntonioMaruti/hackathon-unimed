'use strict';
/* global angular */

angular.module('app.loginCtrl', [])

.controller('login.ctrl', function($scope, $rootScope, $state, $ionicLoading, LoadingTemplate){
    $scope.goHome = function(){        
        $state.go('app.home');
    };

    $scope.closeMenu = function(){
        console.log('close menu');
    };
})