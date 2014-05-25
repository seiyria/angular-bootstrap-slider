angular.module('angular-bootstrap-slider-test', ['ui.bootstrap-slider'])
	.controller('TestCtrl', ['$scope', function($scope) {

		$scope.sliders = {};
		$scope.sliders.sliderValue = 0;

		$scope.sliders.secondSliderValue = 0;

		$scope.$watch('sliders', function(newValue) {
			console.log('sliden',newValue);
		});

	}]);