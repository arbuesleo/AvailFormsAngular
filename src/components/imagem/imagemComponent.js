angular.module('AvFormsGenerator')
    .directive('avImg', function(RestSrv, UiSrv, $timeout, $compile, $filter, $q) {
        return {
            restrict: 'E',
            templateUrl: 'src/components/imagem/imagem.html',
            transclude: true,
            scope: {
                campo: '=',
                obj: '=',
            },
            controller: function($scope, SERVICE_PATH) {
                //Redimensionamento
                $scope.resizeImage = function(file, base64) {
                    var deferred = $q.defer();
                    // We create an image to receive the Data URI
                    var img = document.createElement('img');

                    // When the event "onload" is triggered we can resize the image.
                    img.onload = function() {
                        // We create a canvas and get its context.
                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');

                        // We set the dimensions at the wanted size.
                        canvas.width = 100;
                        canvas.height = 100;

                        // We resize the image with the canvas method drawImage();
                        ctx.drawImage(this, 0, 0, 100, 100);

                        var dataURI = canvas.toDataURL(1.0);
                        base64.base64 = dataURI.replace('data:image/png;base64,', '');
                        deferred.resolve(base64);

                        $scope.$apply();

                        /////////////////////////////////////////
                        // Use and treat your Data URI here !! //
                        /////////////////////////////////////////
                    };
                    img.src = 'data:' + base64.filetype + ';base64,' + base64.base64;
                    return deferred.promise;
                };

                $(":file").filestyle({ text: "", btnClass: "btn-primary", htmlIcon: '<span class="fa fa-folder-open"></span>' });

                $scope.clearImg = function() {
                    for (var prop in $scope.obj) { if ($scope.obj.hasOwnProperty(prop)) { delete $scope.obj[prop]; } }
                };

                //http://markusslima.github.io/bootstrap-filestyle/
            }
        };
    });