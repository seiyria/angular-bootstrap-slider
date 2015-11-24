'use strict';

describe('angular-bootstrap-slider', function() {

	beforeEach(function() {
		browser.get('test.html');
	});

	it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
		expect(browser.getLocationAbsUrl()).toMatch("/test.html");
	});


	//describe('view1', function() {
	//
	//
	//
	//	it('should render view1 when user navigates to /view1', function() {
	//		expect(element.all(by.css('[ng-view] p')).first().getText()).
	//			toMatch(/partial for view 1/);
	//	});
	//
	//});


	//describe('view2', function() {
	//
	//	beforeEach(function() {
	//		browser.get('index.html#/view2');
	//	});
	//
	//
	//	it('should render view2 when user navigates to /view2', function() {
	//		expect(element.all(by.css('[ng-view] p')).first().getText()).
	//			toMatch(/partial for view 2/);
	//	});
	//
	//});
});