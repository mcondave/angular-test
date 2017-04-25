'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('albumDetail').
  component('albumDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.albumId}}</span>',
    controller: ['$routeParams',
      function AlbumDetailController($routeParams) {
        this.albumId = $routeParams.albumId;
      }
    ]
  });
