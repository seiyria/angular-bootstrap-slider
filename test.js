angular.module('angular-bootstrap-slider-test', ['ui.bootstrap-slider'])
	.controller('TestCtrl', ['$scope', function($scope) {

		$scope.sliders = {};
		$scope.sliders.sliderValue = 0;

		$scope.testOptions = {
			min: 5,
			max: 103,
			step: 2.2,
			value: 7
		}

		$scope.sliders.secondSliderValue = 0;

	}]);