angular.module('myApp.services', []).
factory('facebookindexPostService', function($http) {
    var facebookindexPostService = {};

    facebookindexPostService.indexPosts = function(query) {
      console.log("going to index."+query);
      return $http({
        method: 'GET',
        url: 'https://arighosh-ubuntu:4443/fetchPageDetails',
        params: {query: query}
      });
    }

    return facebookindexPostService;
}).
factory('facebookSearchService', function($http) {
    var facebookSearchService = {};

    facebookSearchService.searchPost = function(query) {
      return $http({
        method: 'GET',
        url: 'https://arighosh-ubuntu:4443/searchPosts',
        params: {query: query}
      });
    }

    return facebookSearchService;
});