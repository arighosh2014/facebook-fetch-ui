'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'myApp.controllers',
	'myApp.services',
  'ngRoute',
  'ui.bootstrap',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/search", {templateUrl: "partials/searchPage.html", controller: "searchController"})
  .when("/searchResult", {templateUrl: "partials/searchResult.html", controller: "searchController"})
  .when("/indexPosts", {templateUrl: "partials/indexPosts.html", controller: "indexController"})
  .when("/indexPostsResponse", {templateUrl: "partials/indexPostsResponse.html", controller: "indexController"});
  //.otherwise({redirectTo: '/index'});
}]);
