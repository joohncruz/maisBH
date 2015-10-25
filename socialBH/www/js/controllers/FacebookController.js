angular.module('starter.facebook', [])

.controller('FacebookController', function($scope, $state,$http) {

	$http.get("https://graph.facebook.com/oauth/access_token?client_id=1489197401401789&client_secret=142ec263ac05784f9cb9e4b5db6bbfc8&grant_type=client_credentials")
			.then(function(response) {
			  console.log("peguei a chave" + response.data);
			})

})