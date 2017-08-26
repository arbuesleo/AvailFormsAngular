'use strict'

angular.module('AvFormsGenerator').service('HttpRequestSrv', function($http, ModalSrv, ngNotify, $location, $rootScope, $localStorage) {

    return function(url, method, data, callback, comImg) {
        var requestParams = {
            method: method,
            url: url += (comImg ? '&comImagem=true' : ''),
            data: data
        };

        if (requestParams.method != "GET") {
            ModalSrv.modalCarregando.show('Processando...', { dialogSize: 'sm', progressType: 'success' });
        }
        $http(requestParams).then(
            function successCallBack(response) {
                if (requestParams.method != "GET")
                    ModalSrv.modalCarregando.hide();
                callback && callback(response);
            },

            function errorCallback(response) {

                if (requestParams.method != "GET")
                    ModalSrv.modalCarregando.hide();

                if (response.status == 401 | response.status == -1) {
                    ngNotify.set('Usuario não autenticado, faça login e tente novamente.', { type: 'error', duration: 5000 });
                    delete $localStorage.authDetails;
                    $rootScope.authDetails = { name: '', authenticated: false, permissions: [], imagem: {}, email: '', idEmpresa: undefined, nomeEmpresa: undefined };
                    $location.path('/login');

                } else if (response.status == 403) {

                    $location.path('/naoAutorizado');

                } else if (response.status == 409) {

                    ModalSrv.showErro('Campo Inválido', response.data.fieldsErrorMessages[0], 'Existe um campo inválido no cadastro, CAMPO: ' + response.data.fieldsErrorMessages[0]);

                } else if (response.status == 412) {

                    ModalSrv.showErro('Erro', response.data.atributeMessage.MESSAGE, response.data.atributeMessage.DETALHE ? response.data.atributeMessage.DETALHE : response.data.atributeMessage.MESSAGE);

                } else {

                    ModalSrv.showErro('Erro', 'Ocorreu um erro no sistema. CÓDIGO: ' + response.status + ' MENSAGEM: ' + response.statusText, response.data ? response.data.message : "Servidor não encontrado.");

                }
            }
        );
    };
}).service('RestSrv', function(HttpRequestSrv) {

    var restFactory = {};

    restFactory.find = function(url, callback, comImg) {
        HttpRequestSrv(url, 'GET', {}, callback, comImg);
    };

    restFactory.add = function(url, data, callback) {
        HttpRequestSrv(url, 'POST', data, callback, false);
    };

    restFactory.edit = function(url, data, callback) {
        HttpRequestSrv(url, 'PUT', data, callback, false);
    };

    restFactory.delete = function(url, data, callback) {
        HttpRequestSrv(url, 'DELETE', data, callback, false);
    };

    return restFactory;
});