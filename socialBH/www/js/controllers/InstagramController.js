angular.module('starter.instagram', [])

.controller('InstagramController', function($scope, $state, $http) {

	console.log('trace - InstagramController');

	
	$http.get("https://api.instagram.com/v1/users/2234801162/media/recent/?access_token=31199858.630b037.213c407ea1e1498dbc4950c58ee7face")
	.then(function(response) {
		console.log(response);
		//$scope.lista = response.data.items;
	})

	$http.get("https://api.instagram.com/v1/users/search?q=bhumadicapordia&access_token=31199858.630b037.213c407ea1e1498dbc4950c58ee7face")
	.then(function(response) {
		console.log(response);
		//$scope.lista = response.data.items;
	})


})