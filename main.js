const menu = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbr');

///  Toggle  ///
menu.addEveentListener('click', ()=> {
    navbar.classList.toggle('activate');
    menu.classList.toggle('bx-x');
});