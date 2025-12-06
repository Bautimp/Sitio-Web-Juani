// File: `script.js`
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('section[id]');

    const getCurrentFile = () => {
        const name = window.location.pathname.split('/').pop().toLowerCase();
        return name || 'index.html';
    };

    const getLinkFile = (href) => {
        if (!href) return '';
        if (href.startsWith('#')) return '';
        const clean = href.split('#')[0].split('?')[0];
        return clean.split('/').pop().toLowerCase();
    };

    function updateActiveMenu() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY;

        if (sections.length > 0) {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 150)) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            if ((window.innerHeight + scrollPosition) >= document.body.offsetHeight - 50) {
                currentSectionId = 'contacto';
            }
        }

        const currentFile = getCurrentFile();
        const isHomePage = (currentFile === '' || currentFile === 'index.html');

        navLinks.forEach(link => {
            link.classList.remove('active');

            const href = link.getAttribute('href');

            if (!isHomePage) {

                const linkFile = getLinkFile(href);
                if (linkFile && linkFile === currentFile) {
                    link.classList.add('active');
                }
            } else {
                // En el Home: manejar anclas/sections
                if (currentSectionId && href && href.includes('#' + currentSectionId)) {
                    link.classList.add('active');
                } else if (window.scrollY < 100 && href && href.includes('#inicio')) {
                    link.classList.add('active');
                }
            }
        });
    }

    updateActiveMenu();
    window.addEventListener('scroll', updateActiveMenu);
    window.addEventListener('hashchange', updateActiveMenu);
    window.addEventListener('popstate', updateActiveMenu);
});
