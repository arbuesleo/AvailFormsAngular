'use strict';

angular.module('AvFormsGenerator')
    .service('utilsDate', function() {
        this.converteDataBr = function(data) {
            var dia = data.getDate();
            if (dia.toString().length == 1)
                dia = "0" + dia;
            var mes = data.getMonth() + 1;
            if (mes.toString().length == 1)
                mes = "0" + mes;
            var ano = data.getFullYear();
            return dia + "/" + mes + "/" + ano;
        };

        this.converteBrtoDate = function(data) {
            var dateParts = data.split("/");
            var dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is 0-based
            return dateObject;
        };
    });