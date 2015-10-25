angular.module('starter.instagram', [])

.controller('InstagramController', function($scope, $state,$http, $ionicLoading, $ionicPopup) {

	$ionicLoading.show();

	 var url = "mockinstagram.json" 
	 $http.get(url)
	 .then(function(response) {
	 	$scope.lista = response.data.data;
	 	console.log($scope.lista);
	 })

	$ionicLoading.hide();
})