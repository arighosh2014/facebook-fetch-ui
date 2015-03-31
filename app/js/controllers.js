angular.module('myApp.controllers', []).

  /* Drivers controller */
  controller('navBarCtrl', function($scope) {
     $scope.isCollapsed = true;
  }).
  controller('searchController', function($scope, $location, $rootScope, $sce, facebookSearchService) {
     var htmlDecode = function(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
     };
     $scope.test = function(){
        facebookSearchService.searchPost($scope.query).success(function(data){
          $rootScope.result = data;
          if(data.length > 0) {
                angular.forEach(data, function(page){
                  angular.forEach(page.contents, function(content){
                    content.content = $sce.trustAsHtml(htmlDecode(content.content))
                  });
                });
            }
          $location.path('/searchResult');
        }).error(function(){
          console.log("error!!!");
        });
     };
  }).
  controller('indexController', function($scope, $location, facebookindexPostService) {
     $scope.test = function(){
        facebookindexPostService.indexPosts($scope.pageName).success(function(data){
          console.log("success !!");
          $location.path('/indexPostsResponse');
        }).error(function(){
          console.log("error!!!");
        });
     };
  });