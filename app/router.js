'use strict';
angular.module('app', ['ionic', 'app.Directives','app.Filters','app.Factorys'])
 .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $controllerProvider) {
	if (ionic.Platform.isAndroid()) {
        $ionicConfigProvider.views.transition('none') ;
    }
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.backButton.text('返回').icon('ion-chevron-left');
    $controllerProvider.allowGlobals();
    $stateProvider
    	.state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: '/components/footer/footer.html'
        })
		.state('tab.homepage', {
		    url: '/',
		    views: {
		    	'tab-homepage': {
		    		templateUrl: '/components/homepage/homepage.html',
		    		controller: 'homeCtrl'
		    	}
		    }
		})
		.state('tab.list', {
		    url: '/list',
		    views: {
		    	'tab-list': {
		    		templateUrl: '/components/list/list.html',
		    		controller: 'listCtrl'
		    	}
		    }
		})
		.state('tab.echart', {
		    url: '/echart',
		    views: {
		    	'tab-echart': {
		    		templateUrl: '/components/echart/echart.html',
		    		controller: 'echartCtrl'
		    	}
		    }
		})
		.state('tab.mine', {
		    url: '/mine',
		    views: {
		    	'tab-mine': {
		    		templateUrl: '/components/mine/mine.html',
		    		controller: 'mineCtrl'
		    	}
		    }
		    
		})
		$urlRouterProvider.otherwise("/tab/");
});

