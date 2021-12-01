let icon_cible = document.getElementById("timeline").firstElementChild.firstElementChild;

function initiate() {
    icon_cible.style.visibility = "visible";
}

document.getElementById("timeline").addEventListener('click', testChangementClick);

function testChangementClick() {
    icon_cible.style.visibility = "hidden";
    icon_cible = icon_cible.nextElementSibling;
    icon_cible.style.visibility = "visible";
}

initiate();