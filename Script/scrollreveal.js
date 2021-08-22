window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
    
});

sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
    
});

sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    
});

sr.reveal('.header-btn', {
    duration: 2000,
    origin: 'bottom',
    delay: 1000
    
});

sr.reveal('#testimonial', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
    
});

sr.reveal('.info-left', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    
    
});

sr.reveal('.info-right', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    
    
});

sr.reveal('.info-btn', {
    duration: 2000,
    origin: 'bottom',
    delay: 1000
    
});

sr.reveal('.row-p2', {
    duration: 2000,
    origin: 'top',
    delay: 1000
    
});

sr.reveal('#contact', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
    
});

//smoot scrolling

//version de navegador EDGE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*
//para cualquier version de navegador viejo
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
*/