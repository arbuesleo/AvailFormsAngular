angular.module('AvFormsGenerator')
    .directive('avModalEdit', function(RestSrv, UiSrv, $timeout, $compile, $filter, ngNotify, $uibModal, ModalSrv) {
        return {
            restrict: 'E',
            templateUrl: 'src/components/modal/modalEdit.html',
            transclude: true,
            scope: {
                formData: '=',
                lista: '=',
                objEdit: '=',
                index: '='
            },
            controller: function($scope) {
                $scope.forms = {};
                $scope.objEdit = angular.copy($scope.objEdit);
                $timeout(function() {
                    //Tratativa nos campos
                    for (var j = 0; j < $scope.formData.campos.length; j++) {
                        var campo = $scope.formData.campos[j];
                        var diretiva = $filter('diretivaCampo')(campo.tipoCampo);
                        var tipCam = $filter('tipoCampo')(campo.tipoCampo);

                        angular.element(document.querySelector('#campo_' + campo.nome)).attr('ng-disabled', !campo.editavel);
                        angular.element(document.querySelector('#campo_' + campo.nome)).attr('ng-model', 'objEdit.' + campo.nome);
                        angular.element(document.querySelector('#campo_' + campo.nome)).attr('ng-required', campo.requerido);
                        angular.element(document.querySelector('#campo_' + campo.nome)).attr('ng-maxlength', campo.tamanho);

                        if (diretiva) {
                            angular.element(document.querySelector('#campo_' + campo.nome)).removeAttr('ng-maxlength', '');
                            angular.element(document.querySelector('#campo_' + campo.nome)).attr(diretiva, '');
                        } else if (tipCam) {
                            angular.element(document.querySelector('#campo_' + campo.nome)).attr('type', tipCam);
                        } else if (campo.tipoCampo == 'COMBOBOX') {

                        } else if (campo.tipoCampo == 'CHECKMARK') {

                        }
                        $compile(angular.element(document.querySelector('#campo_' + campo.nome)))($scope);
                    }

                }, 500);


                $scope.salvarEntidade = function() {
                    var clazzName = $scope.formData.nomeClazz;
                    if (!$scope.forms['form_' + clazzName].$valid) {
                        ngNotify.set("Existem campos inválidos no cadastro.", { type: 'error', duration: 4000 });
                        ModalSrv.showErrosFields($scope.forms['form_' + clazzName]);
                        return;
                    }

                    var camposRela = $scope.formData.campos.filter(function(item, index, array) {
                        return (item.tipoCampo == "PESQUISA" && item.requerido)
                    });

                    for (var j = 0; j < camposRela.length; j++) {
                        if (!$scope.objEdit[camposRela[j].nome]) {
                            ngNotify.set("Adicione um(a) " + camposRela[j].label, { type: 'error', duration: 4000 });
                            return;
                        }
                    }

                    var camposCheck = $scope.formData.campos.filter(function(item, index, array) {
                        return (item.tipoCampo == "CHECKMARK" && item.requerido)
                    });

                    for (var j = 0; j < camposCheck.length; j++) {
                        if (!$scope.objEdit[camposCheck[j].nome]) {
                            ngNotify.set("Selecione um(a) " + camposCheck[j].label, { type: 'error', duration: 4000 });
                            return;
                        }
                    }


                    if ($scope.index !== "") {
                        $scope.lista[$scope.index] = $scope.objEdit;
                    } else {
                        $scope.lista.push($scope.objEdit);
                    }
                    $('#modalAdd_' + $scope.formData.nomeClazz).modal('hide');
                }

                $scope.pesquisaObj2 = function(dadosForm, obj) {
                    $uibModal.open({
                        size: 'lg',
                        component: "avModalPesquisa",
                        windowClass: 'zindex08',
                        resolve: {
                            formData: dadosForm
                        }
                    }).result.then(function(result) {
                        $scope.objEdit[obj] = result;
                    });
                };

                $scope.getKey = function(index, obj) {
                    return Object.keys(obj)[index];
                }

            }

        };
    });