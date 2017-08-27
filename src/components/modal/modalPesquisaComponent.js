angular.module('AvFormsGenerator')
    .component('avModalPesquisa', {
        templateUrl: 'src/AvailFormsAngular/components/modal/modalPesquisa.html',
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: function($scope) {
            $scope.listaObj = [];
            $scope.ok = function(obj) {
                $scope.$ctrl.close({ $value: obj });
            };
            $scope.sair = function() {
                $scope.$ctrl.dismiss({ $value: 'cancel' });
            };
        }
    });