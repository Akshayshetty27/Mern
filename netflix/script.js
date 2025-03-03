let scrollAmount = 0;
const scrollStep = 220;

function nextSlide() {
    const container = document.querySelector('.movies-container');
    if (scrollAmount < container.scrollWidth - container.clientWidth) {
        scrollAmount += scrollStep;
        container.scrollLeft += scrollStep;
    }
}

function prevSlide() {
    const container = document.querySelector('.movies-container');
    if (scrollAmount > 0) {
        scrollAmount -= scrollStep;
        container.scrollLeft -= scrollStep;
    }
}


let index = 0;
const slides = document.querySelector('.movies-container');
const totalSlides = document.querySelectorAll('.movies-container img').length;
const visibleSlides = 3; // Adjust based on screen size

function updateSlide() {
    const slideWidth = document.querySelector('.movies-container img').clientWidth;
    slides.style.transform = `translateX(${-index * (slideWidth + 10)}px)`;
}

function nextSlide() {
    if (index < totalSlides - visibleSlides) {
        index++;
        updateSlide();
    }
}

function prevSlide() {
    if (index > 0) {
        index--;
        updateSlide();
    }
}
