'use strict'

angular.module('AvFormsGenerator')
    .filter('formatPermissao', function() {
        return function(input) {
            switch (input) {
                case 'ADMIN':
                    return 'Administrador';
                    break;
                case 'USER':
                    return 'Usuario';
                    break;
                case 'FARMACIA':
                    return 'Farmaceutico';
                    break;

                default:
                    return 'Unknow';
                    break;
            }
        };
    }).filter('diretivaCampo', function() {
        return function(input) {
            switch (input) {
                case 'CNPJ':
                    return 'ui-br-cnpj-mask';
                    break;
                case 'CPF':
                    return 'ui-br-cpf-mask';
                    break;
                case 'TELEFONE':
                    return 'ui-br-phone-number';
                    break;
                case 'CEP':
                    return 'ui-br-cep-mask';
                    break;

                case 'DATA':
                    return "ui-date-mask";
                    break;

                case 'HORA':
                    return "ui-time-mask";
                    break;

                case 'MOEDA':
                    return "ui-money-mask";
                    break;

                default:
                    return undefined;
                    break;
            }
        };
    }).filter('tipoCampo', function() {
        return function(input) {
            switch (input) {
                case 'SENHA':
                    return 'password';
                    break;
                case 'TEXTO':
                    return 'text';
                    break;
                case 'NUMERICO':
                    return 'number';
                    break;

                default:
                    return undefined;
                    break;
            }
        };
    })
    .filter('icoCampo', function() {
        return function(input) {
            switch (input) {
                case 'CNPJ':
                    return 'fa fa-university';
                    break;
                case 'CPF':
                    return 'fa fa-male';
                    break;
                case 'TELEFONE':
                    return 'fa fa-phone';
                    break;
                case 'CEP':
                    return 'fa fa-map';
                    break;

                case 'DATA':
                    return "fa fa-calendar";
                    break;

                case 'HORA':
                    return "fa fa-clock-o";
                    break;

                case 'MOEDA':
                    return "fa fa-money";
                    break;

                case 'SENHA':
                    return 'fa fa-user-secret';
                    break;
                case 'TEXTO':
                    return 'fa fa-reorder';
                    break;
                case 'NUMERICO':
                    return 'fa fa-sort-numeric-asc';
                    break;
                default:
                    return 'fa fa-reorder';
                    break;
            }
        };
    })
    .filter('opcoes', function() {
        return function(input) {
            switch (input) {
                case 'ativo':
                    return 'Ativo';
                    break;
                case 'inativo':
                    return 'Inativo';
                    break;
                case 'bloqueado':
                    return 'Bloqueado';
                    break;

                default:
                    return input;
                    break;
            }
        };
    }).filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);