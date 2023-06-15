var menuIcon = document.querySelector(".menu-img");
var sideBar = document.querySelector(".slide-bar");

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
}