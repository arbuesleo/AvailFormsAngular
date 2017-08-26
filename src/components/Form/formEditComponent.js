angular.module('AvFormsGenerator')
    .directive('avForm', function(RestSrv, UiSrv, $timeout, $compile, $filter, ngNotify, $uibModal, ModalSrv) {
        return {
            restrict: 'E',
            templateUrl: 'src/components/Form/formEdit.html',
            transclude: true,
            link: function(scope, element) {
                scope.forms = [{}];
                scope.carregamento = 25;
                scope.carregando = true;
                RestSrv.find(scope.urlObj + '/getTela', function(response) {
                    scope.carregamento = 50;
                    scope.formData = response.data;
                    $timeout(function() {
                        scope.carregamento = 70;
                        //Tratativa nos campos
                        for (var i = 0; i < scope.formData.entidades.length; i++) {
                            for (var j = 0; j < scope.formData.entidades[i].campos.length; j++) {
                                var campo = scope.formData.entidades[i].campos[j];
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
                                $compile(angular.element(document.querySelector('#campo_' + campo.nome)))(scope);
                            }
                        }
                        scope.carregamento = 85;
                        UiSrv.setActiveTab('entidade0');
                        scope.carregamento = 100;
                        scope.carregando = false;
                    }, 500);
                }, false);

                scope.save = function(obj, fun) {
                    console.log(scope.teste);
                    var funcaoParam = (fun ? true : false);

                    for (var i = 0; i < scope.formData.entidades.length; i++) {
                        var clazzName = scope.formData.entidades[i].nomeClazz;
                        if (!scope.forms['form_' + clazzName].$valid && (scope.formData.entidades[i].tipo == 'PRINCIPAL' || scope.formData.entidades[i].tipo == 'ADICIONAVEL_UM')) {
                            ngNotify.set("Existem campos inválidos no cadastro.", { type: 'error', duration: 4000 });
                            UiSrv.setActiveTab('entidade' + i);
                            ModalSrv.showErrosFields(scope.forms['form_' + clazzName]);
                            return;
                        }
                        if (scope.formData.entidades[i].requerido) {
                            if (scope.formData.entidades[i].tipo == "PESQUISAVEL_MUITOS" || scope.formData.entidades[i].tipo == "ADICIONAVEL_MUITOS") {
                                if (scope.objEdit[scope.formData.entidades[i].nomeClazz].length < 1) {
                                    ngNotify.set("Adicione um(a) " + scope.formData.entidades[i].labelClazz, { type: 'error', duration: 4000 });
                                    UiSrv.setActiveTab('entidade' + i);
                                    return;
                                }
                            } else {
                                if (!scope.objEdit[scope.formData.entidades[i].nomeClazz]) {
                                    ngNotify.set("Adicione um(a) " + scope.formData.entidades[i].labelClazz, { type: 'error', duration: 4000 });
                                    UiSrv.setActiveTab('entidade' + i);
                                    return;
                                }
                            }
                        }

                        var camposRela = scope.formData.entidades[i].campos.filter(function(item, index, array) {
                            return (item.tipoCampo == "PESQUISA" && item.requerido && (scope.formData.entidades[i].tipo == "PRINCIPAL" || scope.formData.entidades[i].tipo == "ADICIONAVEL_UM"));
                        });

                        for (var j = 0; j < camposRela.length; j++) {
                            if (!scope.objEdit[camposRela[j].nome]) {
                                ngNotify.set("Adicione um(a) " + camposRela[j].label, { type: 'error', duration: 4000 });
                                UiSrv.setActiveTab('entidade' + i);
                                return;
                            }
                        }

                        var camposCheck = scope.formData.entidades[i].campos.filter(function(item, index, array) {
                            return ((item.tipoCampo == "CHECKMARK" && item.requerido) && (scope.formData.entidades[i].tipo == "PRINCIPAL" || scope.formData.entidades[i].tipo == "ADICIONAVEL_UM"));
                        });

                        for (var j = 0; j < camposCheck.length; j++) {
                            if (!scope.objEdit[camposCheck[j].nome]) {
                                ngNotify.set("Selecione um(a) " + camposCheck[j].label, { type: 'error', duration: 4000 });
                                return;
                            }
                        }
                    }
                    if (funcaoParam) {
                        obj = fun(obj);
                        if (!obj) {
                            return;
                        }
                    }
                    if (obj.id && obj.id != 0) {
                        RestSrv.edit(scope.urlObj, obj, function(response) {
                            scope.objEdit = response.data.data;
                            ngNotify.set(response.data.atributeMessage.MENSAGE, 'success');
                        });
                    } else {
                        RestSrv.add(scope.urlObj, obj, function(response) {
                            scope.objEdit = response.data.data;
                            ngNotify.set(response.data.atributeMessage.MENSAGE, 'success');
                        });
                    }
                };

                scope.teste = "";

                scope.editarFilha = function(obj, nomeObj, index) {
                    scope[nomeObj + 'editIndex'] = index;
                    scope[nomeObj + 'edit'] = angular.copy(obj);
                };

                scope.removeObjFromList = function(obj, list) {
                    $uibModal.open({
                        component: "messageComponent",
                        resolve: {
                            data: {}
                        }
                    }).result.then(function(result) {
                        if (result) {
                            list.splice(list.indexOf(obj), 1);
                        };
                    });
                };

                scope.pesquisaObj = function(dadosForm, lista) {
                    $uibModal.open({
                        size: 'lg',
                        component: "avModalPesquisa",
                        resolve: {
                            formData: dadosForm
                        },

                    }).result.then(function(result) {
                        for (var i = 0; i < lista.length; i++) {
                            if (lista[i].id == result.id) {
                                ngNotify.set("Esse registro já está adicionado para esse(a) " + scope.formData.entidades[0].labelClazz, { type: 'error', duration: 4000 });
                            }
                        }
                        lista.push(result);
                    });
                };

                scope.pesquisaObj2 = function(dadosForm, obj) {
                    $uibModal.open({
                        size: 'lg',
                        component: "avModalPesquisa",
                        windowClass: 'zindex08',
                        resolve: {
                            formData: dadosForm
                        }
                    }).result.then(function(result) {
                        scope.objEdit[obj] = result;
                    });
                };

                scope.getKey = function(index, obj) {
                    return Object.keys(obj)[index];
                }
            }
        };
    });