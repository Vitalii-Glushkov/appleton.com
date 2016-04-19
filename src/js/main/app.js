/*Modal window dependecies*/
var modal = document.querySelector(".main__overlay");
var btnYes = document.querySelector(".pop-up-age__input-type-button-yes");
var btnNo = document.querySelector(".pop-up-age__input-type-button-no");
var goBack = document.querySelector(".pop-up-error__input-type-button");
var closeAge = document.querySelector(".pop-up-age__close-mark-link");
var closeError = document.querySelector(".pop-up-error__close-mark-link");
var agePopUp = document.querySelector(".pop-up-age");
var errorPopUp = document.querySelector(".pop-up-error");
var errorButton = document.querySelector(".pop-up-error__input-type-button");
var errorCloseButton = document.querySelector(".pop-up-error__close-mark-link");

/*Navigation bar dependencies for 320px screen*/
var menuButton = document.querySelector(".nab-bar__menu-320-link");
var menuList = document.querySelector(".nav-bar__list");

function errorPopUpMod () {
	agePopUp.style.display = "none";
	errorPopUp.style.display = "block";
	errorButton.disabled = "disabled";
	errorCloseButton.style.display = "none";
}

function setCookie (cookieName, cookieValue, cookieExpiryDays, visitorAgeBoolean) {
	var date = new Date();
	date.setTime(date.getTime() + (cookieExpiryDays*24*60*60*1000));
	var username = cookieName + "=" + cookieValue + "; ";
	var age = "age=" + visitorAgeBoolean + "; ";
	var expires = "expires=" + date.toUTCString();
	document.cookie = username + expires;
	document.cookie = age + expires;
}

function getCookie (cookieName) {
	var name = cookieName + "=";
	var cookiesArray = document.cookie.split("; ");
	for (var i = 0; i < cookiesArray.length; i++) {
		var cookieItem = cookiesArray[i];
		while (cookieItem.charAt(0) == " ") { cookieItem.substring(1); }
		if (cookieItem.indexOf(cookieName) == 0) { return cookieItem.substring(name.length, cookieItem.length); }
	}
	return "";
}

function checkCookie() {
    var user = getCookie("username");
    var age = +getCookie("age");
    if (user != "") {
    	if (age) { modal.style.display = "none"; }
    	else {
    		console.log("1");
    		modal.style.display = "block";
    		errorPopUpMod();
    	}
    }
    else {
        user = prompt("Введите свое имя:", "");
        if (user != "" && user != null) { setCookie("username", user, 1, 0); }
    }
}

 document.getElementsByTagName("body").onload = checkCookie();

 btnYes.onclick = function() {
 	var user = getCookie("username");
 	setCookie("username", user, 365, 1);
	modal.style.display = "none";
}

btnNo.onclick = function() {
	var user = getCookie("username");
	setCookie("username", user, 365, 0);
	errorPopUpMod();
}

goBack.onclick = function() {
	modal.style.display = "none";
}

closeAge.onclick = function() {
	modal.style.display = "none";
}

closeError.onclick = function() {
	modal.style.display = "none";
}

menuButton.onclick = function () {
	var target = menuList.style.display;
	if (target == "none" || target == "") { menuList.style.display = "block"; }
	else { menuList.style.display = "none"; }
};