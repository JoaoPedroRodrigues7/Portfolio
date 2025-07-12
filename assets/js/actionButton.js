document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    // Removido o hash #inicio para permitir que o usuário volte à posição de scroll
    // se ele recarregar a página em outra seção.
    // Se você realmente quer que SEMPRE comece no início, descomente a linha abaixo:
    /*
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }
    */

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 300) { // Aparece após rolar 300px
            backToTopButton.classList.add('show');
            whatsappButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
            whatsappButton.classList.remove('show');
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    // O link já está no HTML, então esta função pode ser simplificada ou removida se o link direto for suficiente.
    // Mantido para consistência, mas o href no HTML já faz o trabalho.
    whatsappButton.addEventListener('click', function (event) {
        // Previne o comportamento padrão do link se você quiser adicionar alguma lógica JS antes
        // event.preventDefault();
        // window.open(this.href, '_blank'); // Abre em nova aba
    });

    // Inicializa a visibilidade dos botões ao carregar a página
    toggleButtons();

    // Inicialização do Particles.js
    // Certifique-se de que o arquivo particles.min.js esteja carregado antes deste script.
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 236,
                    "density": {
                        "enable": true,
                        "value_area": 787.7116975187079
                    }
                },
                "color": {
                    "value": "#16d48e" // Cor dos partículas
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "", // Removido link para imagem de github.svg se não for usar
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.warn("Particles.js library not found. Please ensure 'particles.min.js' is loaded before 'actionButton.js'.");
    }


    // Inicialização e atualização do Stats.js
    // O Stats.js é geralmente usado para depuração de performance.
    // Se não for necessário para o usuário final, pode ser removido.
    var count_particles, stats, update;
    if (typeof Stats !== 'undefined') {
        stats = new Stats;
        stats.setMode(0); // 0: fps, 1: ms
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = '9999'; // Garante que fique visível
        document.body.appendChild(stats.domElement);
        count_particles = document.querySelector('.js-count-particles');
        update = function() {
            stats.begin();
            stats.end();
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    } else {
        console.warn("Stats.js library not found. The particle counter will not be displayed.");
        const countParticlesElement = document.querySelector('.count-particles');
        if (countParticlesElement) {
            countParticlesElement.style.display = 'none'; // Esconde o contador se Stats.js não estiver presente
        }
    }
});
