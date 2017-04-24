'use strict';

describe('albumList', function() {

	// Load the module that contains the `albumList` component before each test
	beforeEach(module('albumList'));

	// Test the controller
	describe('AlbumListController', function() {
		var $httpBackend, ctrl;

		// Inject the `mock` $http service into each test
		beforeEach(inject(function($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('albums/albums.json')
						.respond(
							[
								{title: 'Power, Corruption, and Lies'},
								{title: 'Stereochrome'},
								{title: 'TNT'},
								{title: 'We Are The Lazer Viking'}
							]
						);
	      	ctrl = $componentController('albumList');
	    }));

		// Make sure the list doesn't exist until we flush the http request
		it('should create an `albums` model with 4 albums', function() {
			expect(ctrl.albums).toBeUndefined();

			$httpBackend.flush();
			expect(ctrl.albums).toEqual(
				[
					{title: 'Power, Corruption, and Lies'},
					{title: 'Stereochrome'},
					{title: 'TNT'},
					{title: 'We Are The Lazer Viking'}
				]
			);
		});

		it('should set a default value for the `orderProp` model', function() {
      		expect(ctrl.orderProp).toBe('release');
	    });


	});

});