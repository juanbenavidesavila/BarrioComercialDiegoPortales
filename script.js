document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carrusel');
    const items = document.querySelectorAll('.tarjeta');
    const itemWidth = items[0].offsetWidth + 20; // Ancho de las tarjetas + margen
    const visibleItems = Math.floor(container.parentElement.clientWidth / itemWidth);
    let index = 0;

    function updateCarousel() {
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    window.move = function(direction) {
        const maxIndex = items.length - visibleItems;
        index = Math.max(0, Math.min(index + direction, maxIndex));
        updateCarousel();
    }

    // Inicializa el carrusel en la posición correcta
    updateCarousel();
});

