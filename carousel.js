document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll('.image-container2');

    imageContainers.forEach(container => {
        const staticImage = container.querySelector('.main-img2');
        const carousel = container.querySelector('.carousel');
        let hideTimeout;

        function showCarousel() {
            clearTimeout(hideTimeout);
            staticImage.classList.add('d-none'); 
            carousel.classList.remove('d-none');
        }

        function hideCarousel() {
            hideTimeout = setTimeout(() => {
                staticImage.classList.remove('d-none'); 
                carousel.classList.add('d-none');
            }, 5000);
        }

        container.addEventListener('mouseenter', showCarousel);
        container.addEventListener('mouseleave', hideCarousel);

        // For mobile devices, show the carousel on touch and keep it visible for 5 seconds
        container.addEventListener('touchstart', function() {
            showCarousel();
            hideCarousel();
        });

        // Enable swipe functionality for the carousel
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', function(event) {
            touchStartX = event.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', function(event) {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX) {
                carousel.querySelector('.carousel-control-next').click();
            }
            if (touchEndX > touchStartX) {
                carousel.querySelector('.carousel-control-prev').click();
            }
        }
    });
});