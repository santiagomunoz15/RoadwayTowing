
var servicesButton = document.getElementById("header-options-services");
var servicesMenu = document.querySelector(".main-services-menu");
var servicesDisplay;

var headerArrowUp = document.getElementById("header-options-services-arrow1");
var headerArrowDown = document.getElementById("header-options-services-arrow2");


servicesDisplay = addEventListener('click', toggleServicesMenu);


function toggleServicesMenu () {
    if (servicesMenu.style.display == "grid") {
        servicesMenu.style.display = "none";
        headerArrowUp.style.display = "grid";
        headerArrowDown.style.display = "none";
    }
    else {
        servicesMenu.style.display = "grid";
        headerArrowUp.style.display = "none";
        headerArrowDown.style.display = "grid";
    }
}