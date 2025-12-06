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


