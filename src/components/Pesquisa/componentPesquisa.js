angular.module('AvFormsGenerator')
    .directive('avPesquisa', function(RestSrv, UiSrv, $timeout, $compile, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'src/AvailFormsAngular/components/Pesquisa/componentPesquisa.html',
            transclude: true,
            scope: {
                camposPes: '=',
                labelsPes: '=',
                lista: '=',
                clazzName: '@'
            },
            controller: function($scope, SERVICE_PATH) {
                var urlFiltro = SERVICE_PATH.urlPrivate + "/filtro";
                $scope.condicaoPesquisa = 'contem';

                $timeout(function() {
                    if ($scope.camposPes) {
                        $scope.campoPesquisa = $scope.camposPes[0];
                    }
                    $(".select2").select2();
                }, 500);

                $scope.pesquisar = function() {
                    RestSrv.find(urlFiltro + '?campo=' + $scope.campoPesquisa + '&criterio=' + $scope.citerioPes + '&condicao=' + $scope.condicaoPesquisa + '&longClazzName=' + $scope.clazzName, function(response) {
                        $scope.lista = response.data;
                    });
                };
            }
        };
    });