/*Navigation bar dependencies for 320px screen*/
var menuButton = document.querySelector(".nav-bar__menu-320-link");
var menuList = document.querySelector(".nav-bar__list");
var subMenuButton = document.querySelector(".nav-bar__list-item-relative");
var subMenuList = document.querySelector(".nav-bar__products-sub-menu");

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