'use strict';
/* global angular */

angular.module('app.homeCtrl', [])

.controller('home.ctrl', function($scope, $state, $ionicSideMenuDelegate, $timeout){
    // Inicializa o objeto de erros
    $scope.error = {
        status:false
        , message:''
    };
    
    /**
     * @todo - Responsalvel para escutar se o menu está aberto ou não e jogar um valor booleano para a váriavel de controle na view
     */
    $scope.$watch(function () {
        return $ionicSideMenuDelegate.isOpenLeft();
    }, function (isOpen) {
        $timeout(function(){
            $scope.menu = isOpen;
        }, 160);
    });
    /**
     * @todo - Abre o sideMenu
     */
    $scope.openMenu = function(){
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.showError = function(){
        if(!$scope.error.status){
            $scope.error = {
                status:true
                , message:'Error message test'
            };
            setTimeout(function(){
                $scope.error.status = false;
                $scope.$apply();
            }, 8000);
        }
    };
})