// File: `script.js`
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('section[id]'); // Solo selecciona secciones si existen en esta página

    function updateActiveMenu() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY;

        // 1. DETECCIÓN DE SECCIÓN (Solo funciona si estamos en Index.html donde hay <section id="...">)
        if (sections.length > 0) {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;

                // Si el scroll está dentro de esta sección (con margen de 150px)
                if (window.scrollY >= (sectionTop - 150)) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            // Nueva condición: si estamos cerca del final de la página, marcamos 'contacto'
            if ((window.innerHeight + scrollPosition) >= document.body.offsetHeight - 50) {
                currentSectionId = 'contacto';
            }
        }

        // 2. ACTUALIZACIÓN DE CLASES
        navLinks.forEach(link => {
            link.classList.remove('active');

            const href = link.getAttribute('href'); // ej: "Index.html#intro" o "proyecto1.html"
            const currentPath = window.location.pathname; // ej: "/proyecto1.html" o "/Index.html"
            const isHomePage = currentPath.endsWith('Index.html') || currentPath === '/' || currentPath.endsWith('/');

            // --- CASO A: Estamos en una página de Proyecto ---
            if (!isHomePage) {
                if (currentPath.includes(href) && !href.includes('#')) {
                    link.classList.add('active');
                }
            }

            // --- CASO B: Estamos en el Home (Index.html) ---
            else {
                if (currentSectionId && href.includes('#' + currentSectionId)) {
                    link.classList.add('active');
                } else if (window.scrollY < 100 && href.includes('#inicio')) {
                    link.classList.add('active');
                }
            }
        });
    }

    // EJECUTAMOS LA LÓGICA EN DOS MOMENTOS:
    updateActiveMenu();
    window.addEventListener('scroll', updateActiveMenu);
});
