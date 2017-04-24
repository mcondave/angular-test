'use strict';

// Register `albumList` component, along with its associated controller and template
angular.
  	module('albumList').
  	component('albumList', {
    	templateUrl: 'album-list/album-list.template.html',
    	controller: [ '$http',
            function AlbumListController($http) {
        		var self = this;
                self.orderProp = 'release';

                $http.get('albums/albums.json').then(function(response) {
                    self.albums = response.data;
                });
        	}
        ]
  	})