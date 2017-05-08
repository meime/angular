'use strict';
angular.module('app')
    .directive('hideTabs', function ($rootScope) {
        return {
            restrict: 'A',
            link: function ($scope) {
				$scope.$watch(function() {
					$rootScope.hideTabs = 'tabs-item-hide';
				});
                $scope.$on('$destroy', function () {
                    $rootScope.hideTabs = '';
                });
            }
        };
    });