// Carousel functionality
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