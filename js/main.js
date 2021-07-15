// For showing and hiding the categories from menu in nav
function showMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "visible"
    menuContainer.style.opacity="1"
}
function hideMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "hidden"
    menuContainer.style.opacity="0"
}
// -------------------------Carousel start------------------
var counter = 1;
setInterval(function () {
    document.getElementById('p' + counter).checked = true;
    document.getElementById('r' + counter).checked = true;
    document.getElementById('q' + counter).checked = true;
    document.getElementById('s' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 2500);
// -------------------------Carousel End--------------