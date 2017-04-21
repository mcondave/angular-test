'use strict';

// Register `albumList` component, along with its associated controller and template
angular.
  	module('albumList').
  	component('albumList', {
    	templateUrl: 'album-list/album-list.template.html',
    	controller: function AlbumListController() {
    		this.albums = [
    			{
    				title: 'Power, Corruption, and Lies',
    				artist: 'New Order',
    				description: 'A trend-setting new wave album from former Joy Division members.',
                    release: 1983
    			},
    			{
    				title: 'Stereochrome',
    				artist: 'She Her Her Hers',
    				description: 'These Japanese shoegazers hit a home run in this album.',
                    release: 2014
    			},
    			{
    				title: 'TNT',
    				artist: 'Tortoise',
    				description: 'A wonderful addition to Tortoise\'s discography',
                    release: 1998
    			},
    			{
    				title: 'We Are The Lazer Viking',
    				artist: 'An Albatross',
    				description: 'Combining synthesized circus-esque elements with grindcore fundamentals, the anthem of the Lazer Vikings is born.',
    			    release: 2003
                }
    		];

            this.orderProp = 'release';
    	}
  	})