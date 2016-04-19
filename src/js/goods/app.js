/** Navigation bar dependencies for 320px screen */
var menuButton = document.querySelector(".nav-bar__menu-320-link");
var menuList = document.querySelector(".nav-bar__list");
var subMenuButton = document.querySelector(".nav-bar__list-item-relative");
var subMenuList = document.querySelector(".nav-bar__products-sub-menu");
var curtOpenButton = document.querySelector(".cart__link");
var curtPopUp = document.querySelector(".products__overlay");
var curtCloseButton = document.querySelector(".pop-up-store__close-mark");
var toBuyButton = document.querySelector(".goods-content__to-buy-link");

menuButton.onclick = function () {
	var target = menuList.style.display;
	if (target == "none" || target == "") { menuList.style.display = "block"; }
	else { menuList.style.display = "none"; }
};

subMenuButton.onclick = function () {
	var target = subMenuList.style.display;
	if (target == "none" || target == "") { subMenuList.style.display = "block"; }
	else { subMenuList.style.display = "none"; }
};

/** Overlay's dependencies */
curtOpenButton.onclick = function () {
	curtPopUp.style.display = "block";
};

curtCloseButton.onclick = function () {
	curtPopUp.style.display = "none";
};

toBuyButton.onclick = function () {
	curtPopUp.style.display = "block";
};