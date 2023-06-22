var app = angular.module("myapp", []).controller("myctrl", function ($scope, $http) {
	$scope.list = [];
	$scope.showList = true;

	// Simple GET request example:
	let a = $http({
		method: 'GET',
		url: 'https://pokeapi.co/api/v2/pokemon'
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.list = response.data.results;
		console.log($scope.list)
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		console.log("ERROR")
	});
	$scope.getList = function () {
		$scope.showList = true;
	}
	$scope.more = function (name) {
		$scope.showList = false;
		$scope.pokemon_name = name;
		$http({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/' + name
		}).then(function successCallback(response) {
			//alert(response.data.sprites.back_default)
			$scope.pokemon_height = response.data.height;
			$scope.pokemon_image = response.data.sprites.other.home.front_default;
		}, function errorCallback(response) {
			alert("ERROR")
		});
	}
});
