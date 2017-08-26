'use strict';

angular.module('AvFormsGenerator')
    .service('httpRequestInterceptor', function($q, $cookies, $location) {
        return {
            request: function(config) {
                config.headers['X-XSRF-TOKEN'] = $cookies.get('XSRF-TOKEN');

                return config;
            },

            responseError: function(rejection) {

                return $q.reject(rejection);
            }
        };
    });