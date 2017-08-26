angular
    .module('AvFormsGenerator')
    .component('laynerRodrigues', {
        templateUrl: 'src/components/teste/heroDetail.html',
        //controller: HeroDetailController,
        bindings: {
            hero: '=',
            comment: '@'
        }
    });