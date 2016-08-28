/* global angular */
'use strict';

angular.module('app.client', [])

.controller('client.ctrl', function($scope, $ionicPopup, $ionicBackdrop, $ionicModal){
    $scope.filtrosAtivos = [];
    $scope.dadosEnviar = {
        nome: 'Solicitação enviada, aguarde o contato...'
        , especialidade: null
        , data: null
        , hora: null
        , status: 'enviada'
        , sintomas: null
    };

    /**
     * Inicializa o modal
     */
    $ionicModal.fromTemplateUrl('./views/client/filtros-client.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.filtro = modal;
    });

    $scope.filtrar = () => {
      $scope.filtro.show();
    };
    
    $scope.fecharFiltros = () => {
        $scope.filtro.hide();
    };


    $ionicModal.fromTemplateUrl('./views/client/novaConsulta-client.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.novoCadastro = modal;
    });

    $scope.NovaConsulta = () => {
      $scope.novoCadastro.show();
    };

    
    $ionicModal.fromTemplateUrl('./views/client/avaliacaoConsulta-client.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.avaliacaoConsulta = modal;
    });

    $scope.avaliarConsulta = (consulta) => {
      $scope.consultaEmAlterarcao = consulta;
      $scope.avaliacaoConsulta.show();
    };

    
    $scope.fecharAvaliarConsulta = () => {
        $scope.avaliacaoConsulta.hide();
    };


    $scope.addNota = (index) => {

    $ionicBackdrop.retain();
     var confirmPopup = $ionicPopup.confirm({
       title: 'Confirmar',
       template: 'Deseja confirmar a Avaliação de '+ (index + 1) + ' estrelas?'
     });
     confirmPopup.then(function(res) {
       if(res) {
        $scope.tempNota = index + 1;

        var pos = $scope.consultas.indexOf($scope.consultaEmAlterarcao);
        $scope.consultas[pos].status = 'avaliado';
        $scope.avaliacaoConsulta.hide();
        
         $ionicBackdrop.release();

       } else {
         console.log('Não confirmado');
         $ionicBackdrop.release();
       }
     });

    }

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
            nome: 'Dr. Aurelino de Souza'
            , especialidade: 'Clínico geral'
            , data: '25/02/2016'
            , hora: '14:20'
            , status: 'pendente'
            , sintomas: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste velit consectetur ducimus ea fugit eaque.'
        },{
            nome: 'Dr Pessoa 1'
            , especialidade: 'Ginecologia e Obstetrícia'
            , data: '25/02/2016'
            , hora: '14:20'
            , status: 'concluida'
            , sintomas: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste velit consectetur ducimus ea fugit eaque.'
        },{
            nome: 'Dr Pessoa 2'
            , especialidade: 'Pediatra'
            , data: '25/02/2016'
            , hora: '14:20'
            , status: 'confirmada'
            , sintomas: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste velit consectetur ducimus ea fugit eaque.'
        },{
            nome: 'Dr Pessoa 3'
            , especialidade: 'Neurologia'
            , data: '25/02/2016'
            , hora: '14:20'
            , status: 'enviada'
            , sintomas: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste velit consectetur ducimus ea fugit eaque.'
        }
    ]

    $scope.action = function() {
        $ionicBackdrop.retain();
        $timeout(function() {
        $ionicBackdrop.release();
        }, 1000);
    };

    $scope.Confirmar = function(consulta) {
     $ionicBackdrop.retain();
     var confirmPopup = $ionicPopup.confirm({
       title: 'Confirmar',
       template: 'Deseja confirmar a consulta'
     });
     confirmPopup.then(function(res) {
       if(res) {
         consulta.status = 'confirmada';
         $ionicBackdrop.release();
       } else {
         console.log('Não confirmado');
         $ionicBackdrop.release();
       }
     });
   };

   $scope.especialidades = [
        {
            nome: "Clínico geral"
            , selected: false
        },{
            nome: "Ginecologia e Obstetrícia"
            , selected: false
        },{
            nome: "Pediatra"
            , selected: false
        },{
            nome: "Oftalmologia"
            , selected: false
        },{
            nome: "Ortopedia e Traumatologia"
            , selected: false
        },{
            nome: "Neurologia"
            , selected: false
        },
   ]
   $scope.estados = [
        {
            uf: "PR"
        }
   ]

    $scope.cidades = [
        {
            nome: "Maringá"
        }
   ]

   $scope.unidades = [
        {
            nome: "Unimed Maringá"
            , edereco: "rua das ruas, 25"
        }
   ]
    

        $scope.enviarConsulta = function(){
            console.log($scope.dadosEnviar);
            $scope.consultas.push($scope.dadosEnviar);
            console.log($scope.consultas);
    }


});

