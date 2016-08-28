/* global angular */
'use strict';

angular.module('app.admin', [])

.controller('admin.ctrl', function($scope, $ionicModal, $ionicScrollDelegate){
    $scope.filtrosAtivos = [];
    
    /**
     * Inicializa as tabs
     */
    $scope.tabAtiva = {
        id: 1
    }

    /**
     * Inicializa as tabs
     */
    $scope.setTab = (tab) => {
        $ionicScrollDelegate.scrollTop();
        $scope.tabAtiva.id = tab;     
    }

    /**
     * Inicializa o modal
     */
    $ionicModal.fromTemplateUrl('./views/admin/filtros-admin.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then((modal) =>  {
        $scope.modal = modal;
    });
    
    /**
     * Inicializa o modal
     */
    $ionicModal.fromTemplateUrl('./views/admin/reuniao-modal-admin.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then((modal) =>  {
        $scope.novaReuniaoModal = modal;
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
    
    $scope.reunioes = [{
        name: 'Scrum'
        , desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore alias esse tempora, dolorum, ratione repellat rerum velit optio deserunt officiis quam. Aliquid optio neque iure sunt pariatur enim, aperiam quasi!'
        , status: 'Adiada'
        , id:1
        , importancia: 3
    }, {
        name: 'Reunião de resultados'
        , desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore alias esse tempora, dolorum, ratione repellat rerum velit optio deserunt officiis quam. Aliquid optio neque iure sunt pariatur enim, aperiam quasi!'
        , status: 'Adiada'
        , id:2
        , importancia: 2
    }, {
        name: 'Name reunião'
        , desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore alias esse tempora, dolorum, ratione repellat rerum velit optio deserunt officiis quam. Aliquid optio neque iure sunt pariatur enim, aperiam quasi!'
        , status: 'Adiada'
        , id:3
        , importancia: 1
    }];
    /**
     * ver informaçies da reunião
     */
    $scope.abrirInformacoesReuniao = (index) => {
        if(index == $scope.reuniaoMax){
            $scope.reuniaoMax = null;
        }else{
            $scope.reuniaoMax = index;
        }
    }

    $scope.novaReuniao = () => {
        $scope.novaReuniaoModal.show();
    }

    $scope.fecharReuniaoModal = () => {
        $scope.novaReuniaoModal.hide();
    }
    $scope.medicos = [{
        id:1
        , name:'Luke Skywalker'
    } , {
        id:2
        , name:'Luke Vader'
    }, {
        id:3
        , name:'C3PO'
    }, {
        id:4
        , name:'Chewbacca'
    }];
    
    $scope.convidados = [];
    
    $scope.addConvidados = (convidado) => {
        $scope.convidados.push(convidado);
    }
    
});