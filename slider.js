angular.module('ui.bootstrap-slider', [])
	.directive('slider', function($parse) {
		return {
			restrict: 'E',
			replace: true,
			require: 'ngModel',
			template: '<input />',
			scope: {
			},
			link: function($scope, element, attrs, ngModel) {
				var slider = $(element[0]).slider();

				slider.on('slide', function(ev) {
					ngModel.$setViewValue({ value: ev.value });
					console.log(ngModel.$viewValue.value);
				});
			}
		}
	})
;