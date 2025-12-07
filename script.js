document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DEL MENÚ HAMBURGUESA ---
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    // Función para abrir/cerrar
    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        // Cambiar ícono de hamburguesa a X (opcional)
        if (sidebar.classList.contains('active')) {
            menuToggle.innerHTML = '✕'; // Símbolo de cerrar
        } else {
            menuToggle.innerHTML = '☰'; // Símbolo de menú
        }
    }

    // Eventos click
    if(menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu); // Cerrar al hacer click afuera
    }

    // Cerrar menú automáticamente al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cerrar si estamos en móvil (si el menú está activo)
            if (sidebar.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});

/* --- LÓGICA DEL CAROUSEL / MODAL --- */
let slideIndex = 1;

function openModal() {
    document.getElementById("myModal").style.display = "block";
    // Bloquear el scroll del fondo cuando el modal está abierto
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    // Reactivar el scroll
    document.body.style.overflow = "auto";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // Si n es mayor que la cantidad de fotos, vuelve a la 1
    if (n > slides.length) {slideIndex = 1}

    // Si n es menor que 1, va a la última foto
    if (n < 1) {slideIndex = slides.length}

    // Ocultar todas las slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostrar la slide actual
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
    }
}