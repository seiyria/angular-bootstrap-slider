angular.module('angular-bootstrap-slider-test', ['ui.bootstrap-slider'])
	.controller('TestCtrl', ['$scope', '$timeout', function($scope, $timeout) {

		$scope.sliders = {};
		$scope.sliders.sliderValue = 0;

		$scope.testOptions = {
			min: 5,
			max: 103,
			step: 2.2,
			value: 37
		};

		$timeout(function() {
			$scope.testOptions.min = 10;
		}, 2000);

		$scope.sliders.secondSliderValue = 0;

	}]);