var app = angular.module("myapp", ["ngRoute"]);

app.run(function ($rootScope, $http) {
	$rootScope.logined = getCookie('fullname');

	// Truy xuất giá trị của cookie
	function getCookie(name) {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.startsWith(name + '=')) {
				return cookie.substring(name.length + 1);
			}
		}
		return null;
	}

	// Ví dụ sử dụng
	function saveCookie(name, val) {
		const expirationDate = new Date();
		expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000)); // 1 giờ
		setCookie(name, val, expirationDate);
	}
});

app.controller("myCtrl", function ($rootScope, $scope, $http) {
	$scope.list = [];
	$scope.top = [];
	$rootScope.trend = [];
	$scope.showList = true;
	$scope.thisVideo;


	// Simple GET request example:
	let video = $http({
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

	let top4 = $http({
		method: 'GET',
		url: 'http://localhost:3000/top'
	}).then(function successCallback(response) {
		$scope.top = response.data;
	}, function errorCallback(response) {
		console.log("ERROR")
	});

	let trending = $http({
		method: 'GET',
		url: 'http://localhost:3000/trend'
	}).then(function successCallback(response) {
		$rootScope.trend = response.data;
	}, function errorCallback(response) {
		console.log("ERROR")
	});





});




app.config(function ($routeProvider) {
	$routeProvider
		.when("/main", {
			templateUrl: "pages/main.html", controller: "myCtrl"
		})
		.when("/about", {
			templateUrl: "pages/about.html", controller: "aboutCtrl"
		})
		.when("/videoDetails/:id", {
			templateUrl: "pages/videodetails.html", controller: "videoDetailsCtrl"
		})
		.when("/contact", {
			templateUrl: "pages/contact.html", controller: "contactCrtl"
		})
		.when("/contribute", {
			templateUrl: "pages/contribute.html", controller: "contributeCrtl"
		})
		.when("/qna", {
			templateUrl: "pages/qna.html", controller: "qnaCtrl"
		})
		.when("/login", {
			templateUrl: "pages/login.html", controller: "loginCtrl"
		})
		.when("/register", {
			templateUrl: "pages/register.html", controller: "registerCtrl"
		})
		.when("/infor", {
			templateUrl: "pages/infor.html", controller: "inforCtrl"
		})
		.when("/changepassword", {
			templateUrl: "pages/changepassword.html", controller: "changePasswordCtrl"
		})
		.when("/forgetpassword", {
			templateUrl: "pages/forgetpassword.html", controller: "forgetPasswordCtrl"
		})
		.when("/manager", {
			templateUrl: "pages/manager.html", controller: "managerCtrl"
		})
		.when("/logout", {
			redirectTo: "/main", controller: "logoutCtrl"
		})
		.otherwise({ redirectTo: "/main" });
});
