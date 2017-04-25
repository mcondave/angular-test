'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/albums', {
          template: '<album-list></album-list>'
        }).
        when('/albums/:albumId', {
          template: '<album-detail></album-detail'
        }).
        otherwise('/phones');
    }
  ]);
