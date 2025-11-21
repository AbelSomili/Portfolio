const menu = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbr');

///  Toggle  
menu.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
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

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if(!navbar.contains(e.target) && !menu.contains(e.target)) {
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    }
});