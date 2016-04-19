var menuButton = document.querySelector(".nab-bar__menu-320-link");
var menuList = document.querySelector(".nav-bar__list");

menuButton.onclick = function () {
	var target = menuList.style.display;
	if (target == "none" || target == "") { menuList.style.display = "block"; }
	else { menuList.style.display = "none"; }
};