angular.module('starter.issuu', [])

.controller('IssuuController', function($scope, $state,$http, $ionicLoading, $ionicPopup) {

	$ionicLoading.show();

	//var url = "http://search.issuu.com/api/2_0/document?q=prefeituradebh";
	 var url = "mockissuu.json" 
	 $http.get(url)
	 .then(function(response) {
	 	$scope.lista = response.data.response.docs;
	 	console.log($scope.lista );
	 })

	
	$ionicLoading.hide();

})