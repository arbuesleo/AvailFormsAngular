angular
    .module('AvFormsGenerator')
    .component('laynerRodrigues', {
        templateUrl: 'src/AvailFormsAngular/components/teste/heroDetail.html',
        //controller: HeroDetailController,
        bindings: {
            hero: '=',
            comment: '@'
        }
    });