angular-bootstrap-slider
========================

This plugin was mostly put together quickly with the intent of using something that worked. It has zero test coverage. It is, however, registered on bower as `angular-bootstrap-slider`. Just include `slider.js` and use the package `ui.bootstrap-slider`.

Available Options
=================
See [bootstrap-slider](https://github.com/seiyria/bootstrap-slider) for examples and options.

Sample Usage
============
```html
<!-- it can be used as an element -->
<slider ng-model="sliders.sliderValue" min="testOptions.min" step="testOptions.step" max="testOptions.max" value="testOptions.value"></slider>

<!-- ..or an attribute -->
<span slider ng-model="sliders.secondSliderValue" min="minTest"></span>
```
