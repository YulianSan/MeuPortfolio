const icon_menu = document.getElementsByClassName("icon-menu")[0];

icon_menu.addEventListener("click", animarMenu);

function animarMenu(){
    let header = document.getElementsByClassName("header")[0];
    icon_menu.classList.toggle("fechar");
    header.classList.toggle("aberto");

}