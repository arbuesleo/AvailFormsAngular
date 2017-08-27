angular.module('AvFormsGenerator')
    .component('messageComponent', {
        templateUrl: 'src/AvailFormsAngular/components/message/message.html',
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&',
        },
        controller: function() {
            var self = this;

            self.content = 'Deseja realmente excluir esse registro?';

            self.title = 'Confirmação';
            self.lblBtnOk = 'Sim';
            self.lblBtnCancel = 'Não';

            var _data = self.resolve.data;

            if (angular.isDefined(_data)) {

                if (angular.isDefined(_data.title)) {
                    self.title = _data.title;
                }

                if (angular.isDefined(_data.content)) {
                    self.content = _data.content;
                }

                if (angular.isDefined(_data.lblBtnOk)) {
                    self.lblBtnOk = _data.lblBtnOk;
                }
                self.showBtnOk = _data.showBtnOk != false;

                if (angular.isDefined(_data.lblBtnCancel)) {
                    self.lblBtnCancel = _data.lblBtnCancel;
                }
                self.showBtnCancel = _data.showBtnCancel != false;
            }

            self.ok = function() {
                self.close({ $value: true });
            };

            self.cancel = function() {
                self.dismiss({ $value: false });
            };
        }
    });