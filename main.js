const menu = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbr');

///  Toggle  ///
menu.addEveentListener('click', ()=> {
    navbar.classList.toggle('activate');
    menu.classList.toggle('bx-x');
});


// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.navbr a');
navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    });
});