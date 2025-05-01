let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;
    const carouselImages = document.querySelector('.carousel-images');
    const slideWidth = slides[0].clientWidth;
    carouselImages.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        document.querySelectorAll('section').forEach(section => {
            section.style.display = section.id === target ? 'block' : 'none';
        });
    });
});

function handleSubmit(event) {
    event.preventDefault();
    let valid = true;

    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) {
        document.getElementById('nameError').textContent = 'El nombre es obligatorio';
        valid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = 'El nombre no debe contener números';
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'El correo es obligatorio';
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Formato de correo inválido';
        valid = false;
    }

    const career = document.getElementById('career').value;
    if (!career) {
        document.getElementById('careerError').textContent = 'Selecciona una carrera';
        valid = false;
    }

    const conferences = document.querySelectorAll('input[name="conference"]:checked');
    if (conferences.length === 0) {
        document.getElementById('conferenceError').textContent = 'Selecciona al menos una conferencia';
        valid = false;
    }

    if (valid) {
        alert('Registro exitoso! Recibirás un correo de confirmación.');
        document.getElementById('registrationForm').reset();
    }
}