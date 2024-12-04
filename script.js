// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animações
    const tl = gsap.timeline();

    // Animação do logo
    tl.from('.logo', {
        opacity: 0,
        x: -20,
        duration: 0.5
    });

    // Animação do status (RAUL PRIMO)
    tl.from('.loading', {
        opacity: 0,
        y: 10,
        duration: 0.3
    }, '-=0.2');

    tl.from('.counter', {
        opacity: 0,
        y: 10,
        duration: 0.3
    }, '-=0.1');

    // Animação dos links do menu
    tl.from('nav ul li', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1
    }, '-=0.2');

    // Animação da linha binária superior
    tl.from('.binary-line:not(.bottom)', {
        opacity: 0,
        duration: 1
    }, '-=0.5');

    // Animação do título principal
    tl.from('.title-wrapper h1:first-child', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.5');

    tl.from('.star', {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.4');

    tl.from('.title-wrapper h1:last-child', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.6');

    // Animação da linha binária inferior
    tl.from('.binary-line.bottom', {
        opacity: 0,
        duration: 1
    }, '-=0.5');

    // Efeito de flutuação contínua na estrela
    gsap.to('.star', {
        y: -10,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
    });

    // Efeito hover nos links do menu
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});

