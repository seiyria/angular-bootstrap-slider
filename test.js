angular.module( 'angular-bootstrap-slider-test', ['ui.bootstrap-slider'] )
		.controller( 'TestCtrl', ['$scope', '$log', function ( $scope, $log ) {

			$scope.sliders = {};
			$scope.sliders.sliderValue = 0;
			$scope.sliders.secondSliderValue = 0;
			$scope.sliders.thirdSliderValue = 0;
			$scope.sliders.fourthSliderValue = 0;
			$scope.sliders.fithSliderValue = 0;
			$scope.sliders.sixthSliderValue = 0;
			$scope.sliders.seventhSliderValue = 0;
			$scope.sliders.eighthSliderValue = 0;
			$scope.sliders.ninthSliderValue = 0;

			$scope.range = true;
			$scope.value = [55, 70];

			$scope.testOptions = {
				min: 5,
				max: 103,
				step: 2.2,
				value: 7,
				rangeValue: [2, 20]
			};

			$scope.sliders.rangeSliderValue = [10, 50];
			$scope.sliders.rangeSliderValue2 = [10, 50];

			$scope.$watch( 'sliders.rangeSliderValue2', function ( value ) {
				$log.log( 'sliders value has changed: ' + value );
			} );

      $scope.myFormater = function ( value ) {
        return value + "%";
      };

      $scope.delegateEvent = null;
      $scope.slideDelegate = function ( value, $event ) {
        $log.log( 'slide value: ' + value );
        $scope.delegateEvent = $event;
      };
	}]);