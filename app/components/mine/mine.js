angular.module('app.Controllers',[])
	.controller('mineCtrl',['$scope', '$http', mineCtrl])
	function mineCtrl($scope, $http){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    autoplay: 2500,
		    // 如果需要滚动条
		    // scrollbar: '.swiper-scrollbar',
		})   
	}