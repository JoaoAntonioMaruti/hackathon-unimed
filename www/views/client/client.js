/* global angular */
'use strict';

angular.module('app.client', [])

.controller('client.ctrl', function($scope, $ionicPopup, $ionicModal){
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
            , name:'Consultas envidas'
        } , {
            id:2
            , name:'Consultas pendentes'
        } , {
            id:3
            , name:'Consultas confirmadas'
        }
    ];

    console.log($scope.filtros)
    
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

    $scope.consultas = [
        {
            nome: 'Pessoa 1 com nome maior de grande'
            , data: '25/02/2016'
            , hora: '14:20'
            , status: 'pendente'
        },{
            nome: 'Pessoa 1'
            , data: '25/02/2016'
            , hora: '14:20'
            , status: 'confirmada'
        },{
            nome: 'Pessoa 1'
            , data: '25/02/2016'
            , hora: '14:20'
            , status: 'confirmada'
        },{
            nome: 'Pessoa 1'
            , data: '25/02/2016'
            , hora: '14:20'
            , status: 'enviada'
        }
    ]

    $scope.Confirmar = function(consulta) {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Confirmar',
       template: 'Deseja confirmar a consulta'
     });
     confirmPopup.then(function(res) {
       if(res) {
         consulta.status = 'confirmada';;
       } else {
         console.log('Não confirmado');
       }
     });
   };

});

