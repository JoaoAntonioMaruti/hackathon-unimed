'use strict';

angular.module("app.medico", [])

.controller('medico.ctrl', function($scope, $ionicModal){

    $scope.abrirComment = (index) => {
        if(index == $scope.commentMax){
            $scope.commentMax = null;
        }else{
            $scope.commentMax = index;
        }
        console.log($scope.commentMax)
    }
})