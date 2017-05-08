'use strict';
angular.module('app.Directives')
    .directive('listTemplate', function () {
        return {
            restrict: 'AE',
            templateUrl: 'components/templates/list-template.html'
        };
    });
