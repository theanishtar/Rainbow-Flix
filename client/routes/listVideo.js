var app = angular.module("myapp", []).controller("myctrl", function ($scope, $http) {
	$scope.trend = [];

	let trending = $http({
		method: 'GET',
		url: 'http://localhost:3000/trend'
	}).then(function successCallback(response) {
		$scope.trend = response.data;
	}, function errorCallback(response) {
		console.log("ERROR")
	});
});
