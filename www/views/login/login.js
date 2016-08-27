'use strict';
/* global angular */

angular.module('app.loginCtrl', [])

.controller('login.ctrl', function($scope, $rootScope, $state, $ionicLoading, LoadingTemplate){
    $scope.goHome = function(){
        $ionicLoading.show(LoadingTemplate);
        setTimeout(function(){
            $ionicLoading.hide();
            $state.go('app.home');
        },1000);
    };

    $scope.closeMenu = function(){
        console.log('close menu');
    };
})