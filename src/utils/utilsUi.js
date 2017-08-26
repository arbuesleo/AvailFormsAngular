'use strict'

angular.module('AvFormsGenerator').service('UiSrv', function() {

    this.configuraTabela = function(nomeTabela) {
        $('#' + nomeTabela).DataTable({
            "destroy": true,
            "paging": true,
            "lengthChange": true,
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false,
            "language": {
                "lengthMenu": "Mostrar _MENU_ registros por página",
                "zeroRecords": "Nenhum dado encontrado :/",
                "info": "Página _PAGE_ de _PAGES_",
                "infoEmpty": "Não há registros disponíveis.",
                "infoFiltered": "(filtrado de _MAX_ registros.)",
                "search": "Pesquisar ",
                "decimal": ",",
                "thousands": ".",
                "paginate": {
                    "previous": "<<",
                    "next": ">>"
                }
            }
        });
    };

    this.setActiveTab = function(idTab) {
        $('.nav-tabs a[href="#' + idTab + '"]').tab('show');
    };

});