var app = angular.module("myapp", []).controller("myCtrl", function ($rootScope, $scope, $http) {
	$rootScope.logined = "";
	saveCookie('fullname', "");



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
		alert(678)
		const expirationDate = new Date();
		expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000)); // 1 giờ
		setCookie(name, val, expirationDate);
	}

	function setCookie(name, value, expires) {
		alert(3)
		document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
	}
});
