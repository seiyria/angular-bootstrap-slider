'use strict';

describe('angular-bootstrap-slider', function() {

	describe('tooltip', function() {
		var slider, handle, tooltip;

		beforeEach(function() {
			browser.get('/test.html');
			browser.waitForAngular();

			slider = element(by.css('[slider-id="tooltipSlider"]'));
			handle = slider.element(by.css('.slider-handle.min-slider-handle'))
			tooltip = slider.element(by.css('.tooltip.tooltip-main'));
		});

		it('should be visible on hover', function() {
			browser.actions().mouseMove(handle).perform();
			expect(tooltip.getAttribute('class')).toMatch('in');
		});

		it('should have filtered text', function() {
			browser.actions().mouseMove(handle).perform();
			expect(tooltip.getText()).toBe('Current value: 0%');
		});


		describe('should refresh filtered text', function() {
			var suffix, relayout;

			beforeEach(function() {
				suffix = element(by.model('suffix'));
				relayout = element(by.id('relayout-button'));
				suffix.clear();
			});

			it('on relayout event', function() {
				suffix.sendKeys('aaa');
				relayout.click();
				browser.actions().mouseMove(handle).perform();
				expect(tooltip.getText()).toBe('Current value: 0aaa');
			});

			it('on drag start', function() {
				suffix.sendKeys('bbb');
				handle.click();
				browser.actions().mouseMove(handle).perform();
				expect(tooltip.getText()).toBe('Current value: 0bbb');
			});
		});
	});

});