
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const senderName = document.getElementById('name').value;
    alert(`Thank you, ${senderName}! Your message has been sent successfully.`);
    contactForm.reset();
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    const navAnchors = document.querySelectorAll('.nav-links a');
    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });

    navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});
