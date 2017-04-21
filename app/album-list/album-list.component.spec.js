'use strict';

describe('albumList', function() {

	// Load the module that contains the `albumList` component before each test
	beforeEach(module('albumList'));

	// Test the controller
	describe('AlbumListController', function() {
		var ctrl;

		beforeEach(inject(function($componentController) {
	      ctrl = $componentController('albumList');
	    }));

		it('should create an `albums` model with 4 albums', function() {
			expect(ctrl.albums.length).toBe(4);
		});

		it('should set a default value for the `orderProp` model', function() {
      		expect(ctrl.orderProp).toBe('release');
	    });


	});

});