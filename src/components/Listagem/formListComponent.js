angular.module('AvFormsGenerator')
    .directive('avList', function(RestSrv, UiSrv, $timeout, $compile, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'src/components/Listagem/formList.html',
            transclude: true,
            link: function(scope, element) {
                scope.carregamento = 25;
                scope.carregando = true;
                RestSrv.find(scope.urlObj + '/getTelaListagem', function(response) {
                    scope.carregamento = 50;
                    scope.listData = response.data;
                    $timeout(function() {
                        scope.carregamento = 100;
                        scope.carregando = false;
                    }, 500);
                }, false);
            }
        };
    });