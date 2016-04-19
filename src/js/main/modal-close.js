var modal = document.querySelector(".main__overlay");
var btnYes = document.querySelector(".pop-up-age__input-type-button-yes");
var btnNo = document.querySelector(".pop-up-age__input-type-button-no");
var goBack = document.querySelector(".pop-up-error__input-type-button");
var closeAge = document.querySelector(".pop-up-age__close-mark-link");
var closeError = document.querySelector(".pop-up-error__close-mark-link");

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