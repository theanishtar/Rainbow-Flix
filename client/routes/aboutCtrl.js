app.controller("aboutCtrl", function ($rootScope, $scope) {
	$scope.video;

	$http({
		method: 'GET',
		url: 'http://localhost:3000/'
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.list = response.data;
		//console.log(response.data)
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		console.log("ERROR")
	});
});