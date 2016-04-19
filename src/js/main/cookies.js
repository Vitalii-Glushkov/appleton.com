var agePopUp = document.querySelector(".pop-up-age");
var errorPopUp = document.querySelector(".pop-up-error");
var errorButton = document.querySelector(".pop-up-error__input-type-button");
var errorCloseButton = document.querySelector(".pop-up-error__close-mark-link");

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