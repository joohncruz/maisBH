angular.module('starter.facebook', [])

.controller('FacebookController', function($scope, $state,$http) {

	$http.get("https://graph.facebook.com/oauth/access_token?client_id=1489197401401789&client_secret=142ec263ac05784f9cb9e4b5db6bbfc8&grant_type=client_credentials")
			.then(function(response) {
			  var urlTimeLine = "https://graph.facebook.com/prefeiturabh/posts?fields=object_id,link,icon,source,picture,id,type,message&" + response.data;
			  $http.get(urlTimeLine).then(function(resp) {
			      $scope.lista = resp.data.data;
			      console.log($scope.lista);
			   })
			})

})