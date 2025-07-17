document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body; // Adicionado para controlar o scroll do body

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll'); // Impede o scroll do body quando o menu está aberto
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll'); // Permite o scroll do body
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
            // Adiciona um pequeno atraso para a transição do menu antes de rolar
            setTimeout(() => {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // Tempo da transição do menu-aberto
        });
    });
});
