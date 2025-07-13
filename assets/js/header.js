document.addEventListener('DOMContentLoaded', function () {
    // Elementos de controle do menu
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;
    const header = document.querySelector('.header'); // Seleciona o header

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll'); // Adiciona classe para impedir scroll
            header.classList.add('menu-open'); // Adiciona classe para estilizar o header quando o menu está aberto
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll'); // Remove classe para permitir scroll
            header.classList.remove('menu-open'); // Remove classe do header
        }
    });

    // Fecha o menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false; // Desmarca o checkbox
            menuAberto.classList.remove('active'); // Fecha o menu
            body.classList.remove('no-scroll'); // Permite o scroll
            header.classList.remove('menu-open'); // Remove classe do header
        });
    });

    // Esconder/mostrar o header ao rolar
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        // Verifica se o menu não está aberto antes de esconder o header
        if (!menuToggle.checked) {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
                // Rolando para baixo e já passou do header
                header.style.top = "-100px"; // Esconde o header
            } else {
                // Rolando para cima ou no topo da página
                header.style.top = "0"; // Mostra o header
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
        }
    }, false);
});
