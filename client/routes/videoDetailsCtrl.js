app.controller("videoDetailsCtrl", function ($rootScope, $scope, $routeParams, $http) {
	let trending = $http({
		method: 'GET',
		url: 'http://localhost:3000/trend'
	}).then(function successCallback(response) {
		$rootScope.trend = response.data;
	}, function errorCallback(response) {
		console.log("ERROR")
	});

	$scope.idVideoDetails = $routeParams.id;
	let a = $http({
		method: 'GET',
		url: 'http://localhost:3000/video/id=' + $routeParams.id
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.videoDetails = response.data.data;
		//console.log(response.data)
		load($scope.videoDetails.href);
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		console.log("ERROR")
		alert("error")
	});

	function load(href) {
		const div = document.createElement('div');

		div.className = 'row';

		div.innerHTML = `
		<iframe id="frame" style="width: 100%;" src="{{idVideoDetails.href}}" title="YouTube video player" frameborder="0"	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> </iframe>`;
		let fr = '<iframe id="frame" style="width: 100%;" src="{{ link }}" title="YouTube video player" frameborder="0"	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> </iframe>';
		document.querySelector("#vdl").appendChild(div);
		document.querySelector("#frame").src = href;
	}
});