function listCtrl(t,n){new Swiper(".swiper-container",{direction:"horizontal",loop:!0,pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",autoplay:2500})}angular.module("app.Controllers",[]).controller("listCtrl",["$scope","$http",listCtrl]);