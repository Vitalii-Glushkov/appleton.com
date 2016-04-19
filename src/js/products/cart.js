var curtOpenButton = document.querySelector(".cart__link");
var curtPopUp = document.querySelector(".products__overlay");
var curtCloseButton = document.querySelector(".pop-up-store__close-mark");

curtOpenButton.onclick = function () {
	curtPopUp.style.display = "block";
};

curtCloseButton.onclick = function () {
	curtPopUp.style.display = "none";
};