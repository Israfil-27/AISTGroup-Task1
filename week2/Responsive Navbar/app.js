const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

hamburgerMenu.addEventListener('mouseenter', () => {
    if (window.innerWidth <= 768) {
        navbarNav.classList.add('show');
    }
});

navbarNav.addEventListener('mouseleave', () => {
    navbarNav.classList.remove('show');
});

const navLinks = document.querySelectorAll('.navbar-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });

    link.addEventListener('mouseenter', () => {
        link.classList.add('active');
    });

    link.addEventListener('mouseleave', () => {
        if (!link.classList.contains('active')) {
            link.classList.remove('active');
        }
    });
});