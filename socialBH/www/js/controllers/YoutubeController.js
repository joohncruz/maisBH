angular.module('starter.youtube', [])

.controller('YoutubeController', function($scope, $state, $http) {


$http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyB-dQu1U88WXAsHWP2JAgSijQM6RnT1yFM&channelId=UCDH88MpQ8HqvdzRegz12dew&part=snippet,id&order=date&maxResults=20")
.then(function(response) {
	$scope.lista = response.data.items;

	console.log($scope.lista);

})

})