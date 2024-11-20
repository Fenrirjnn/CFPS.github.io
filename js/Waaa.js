// JavaScript Document<script>
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;

    function updateCarousel() {
        const width = items[0].getBoundingClientRect().width; // Ancho de un cuadro
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    // Navegación hacia adelante
    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Navegación hacia atrás
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Asegúrate de ajustar el tamaño al cargar la página
    window.addEventListener('resize', updateCarousel);
</script>
