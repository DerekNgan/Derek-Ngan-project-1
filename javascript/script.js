
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.menu-flex ul');
const navLinks = document.querySelector('.menu-flex a');

allEventListeners();

function allEventListeners(){
    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach(element => element.addEventListener('click', navLinkClick));
}

function togglerClick(){
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

function navLinkClick(){
    if(navMenu.classList.contains('open')){
    navToggler.click();
    }
}