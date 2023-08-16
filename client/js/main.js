(function ($) {

	"use strict";

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		$this.find('.dropdown-menu').removeClass('show');
	});

})(jQuery);

function logout() {
	saveCookie('fullname', "");
	window.location.reload();
}
// Ví dụ sử dụng
function saveCookie(name, val) {
	const expirationDate = new Date();
	expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000)); // 1 giờ
	setCookie(name, val, expirationDate);
}

function setCookie(name, value, expires) {
	document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}