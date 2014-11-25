angular.module('ui.bootstrap-slider', [])
    .directive('slider', ['$parse', '$timeout', function ($parse, $timeout) {
        return {
            restrict: 'AE',
            replace: true,
            template: '<input type="text" />',
            require: 'ngModel',
            scope: {
                max: "=",
                min: "=",
                step: "=",
                value: "=",
                ngModel: '=',
                range:'=',
                sliderid:'=',
                formater:'&',
                onStartSlide: '&',
                onStopSlide: '&',
                onSlide: '&'
            },
            link: function ($scope, element, attrs, ngModelCtrl, $compile) {
                initSlider();

                function initSlider() {

                    if (attrs.ngChange) {
                        ngModelCtrl.$viewChangeListeners.push(function () {
                            $scope.$apply(attrs.ngChange);
                        });
                    }

                    $.fn.slider.Constructor.prototype.disable = function () {
                        this.picker.off();
                    };

                    $.fn.slider.Constructor.prototype.enable = function () {
                        this.picker.on();
                    };

                    if (attrs.ngChange) {
                        ngModelCtrl.$viewChangeListeners.push(function () {
                            $scope.$apply(attrs.ngChange);
                        });
                    }

                    var options = {};
                    if ($scope.sliderid) options.id = $scope.sliderid;
                    if ($scope.min) options.min = parseFloat($scope.min);
                    if ($scope.max) {
                        options.max = parseFloat($scope.max);
                    }


                    if (attrs.step) options.step = parseFloat($scope.step);
                    if (attrs.precision) options.precision = parseFloat(attrs.precision);
                    if (attrs.orientation) options.orientation = attrs.orientation;
                    if ($scope.value) {
                        if (angular.isNumber($scope.value) || angular.isArray($scope.value)) {
                            options.value = $scope.value;
                        } else if (angular.isString($scope.value)) {
                            if (attrs.value.indexOf("[") === 0) {
                                options.value = angular.fromJson($scope.value);
                            } else {
                                options.value = parseFloat($scope.value);
                            }
                        }
                    }
                    if ($scope.range) {
                        options.range = $scope.range === true;
                    }

                    if (attrs.selection) options.selection = attrs.selection;
                    if (attrs.tooltip) options.tooltip = attrs.tooltip;
                    if (attrs.tooltipseparator) options.tooltip_separator = attrs.tooltipseparator;
                    if (attrs.tooltipsplit) options.tooltip_split = attrs.tooltipsplit === 'true';
                    if (attrs.handle) options.handle = attrs.handle;
                    if (attrs.reversed) options.reversed = attrs.reversed === 'true';
                    if (attrs.enabled) options.enabled = attrs.enabled === 'true';
                    if (attrs.naturalarrowkeys) options.natural_arrow_keys = attrs.naturalarrowkeys === 'true';
                    if (attrs.formater) options.formater = $scope.$eval($scope.formater);

                    if (options.range && !options.value) {
                        options.value = [0, 0]; // This is needed, because of value defined at $.fn.slider.defaults - default value 5 prevents creating range slider
                    }

                    var slider = $(element[0]).slider(options);
                    slider.slider('destroy');
                    var slider = $(element[0]).slider(options);

                    var updateEvent = attrs.updateevent || 'slide';

                    slider.on(updateEvent, function (ev) {
                        ngModelCtrl.$setViewValue(ev.value);
                        $timeout(function () {
                            $scope.$apply();
                        });

                        if(typeof ev != undefined && typeof ev.value != undefined) {
                            $scope.onSlide({'value': ev.value});
                        }
                    });

                    // Event listeners
                    var sliderEvents = {
                        slideStart: 'onStartSlide',
                        slideStop: 'onStopSlide'
                    };

                    angular.forEach(sliderEvents, function(sliderEventAttr, sliderEvent) {
                        slider.on(sliderEvent, function(ev) {

                            if ($scope[sliderEventAttr]) {
                                $scope.$eval($scope[sliderEventAttr]);

                                $timeout(function() {
                                    $scope.$apply();
                                });
                            }
                        });
                    });


                    if (angular.isDefined(attrs.ngDisabled)) {
                        $scope.$watch(attrs.ngDisabled, function (value) {
                            if (value) {
                                slider.slider('disable');
                            } else {
                                slider.slider('enable');
                            }
                        });
                    }


                    $scope.$watch('ngModel', function(value) {
                        slider.slider('setValue', value);
                    });
                };

                $scope.$watch('max', function(value){
                     initSlider();
                });

                $scope.$watch('min', function(value){
                    initSlider();
                });

                $scope.$watch('step', function(value){
                    initSlider();
                });

                $scope.$watch('range', function(value) {
                    initSlider();
                });
            }
        };
    }])
;
