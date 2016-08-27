/* global angular */
'use strict';

angular.module('app.admin', [])

.controller('admin.ctrl', function($scope, $ionicModal){
    $scope.filtrosAtivos = [];

    /**
     * Inicializa o modal
     */
    $ionicModal.fromTemplateUrl('./views/admin/filtros-admin.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    
    
    $scope.filtrar = () => {
      $scope.modal.show();
    };
    
    
    $scope.fecharFiltros = () => {
        $scope.modal.hide();
    };


    $scope.filtros = [
        {
            id:1
            , name:'Informações gerencias'
        } , {
            id:2
            , name:'Novos usuarios'
        } 
    ];
    
    for(let i = 0; i < $scope.filtros.length; i++){
      $scope.filtrosAtivos.push($scope.filtros[i]);  
    }
    //$scope.filtrosAtivos = $scope.filtros;

    $scope.selecionaFiltro = (filtro) => {
        var idx = $scope.filtrosAtivos.indexOf(filtro);
        if(idx > -1){
            $scope.filtrosAtivos.splice(filtro, 1)
        }else{
            $scope.filtrosAtivos.push(filtro);
        }
        console.log($scope.filtrosAtivos);
    }
    
    $scope.adicionarFiltros = () => {
       
    }
});