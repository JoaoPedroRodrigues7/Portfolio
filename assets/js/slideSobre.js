document.addEventListener('DOMContentLoaded', function () {
    // Clona o elemento com o ID 'headline-scroll' para criar um efeito de rolagem contínua
    const headlineScroll = document.getElementById('headline-scroll');

    // Verifica se o elemento existe antes de tentar clonar
    if (headlineScroll) {
        const clone = headlineScroll.cloneNode(true);
        headlineScroll.parentNode.appendChild(clone);

        // Define a largura dos elementos com base na largura do conteúdo
        // Isso é importante para que a animação de translateX(-50%) funcione corretamente
        // garantindo que o conteúdo clonado esteja ao lado do original.
        const scrollWidth = headlineScroll.scrollWidth;
        headlineScroll.style.width = `${scrollWidth}px`;
        clone.style.width = `${scrollWidth}px`;
    } else {
        console.warn("Element with ID 'headline-scroll' not found. The scrolling headline effect will not be applied.");
    }
});

// Cria e adiciona um estilo CSS para a animação de rolagem
// Esta parte do CSS pode ser movida para o arquivo style.css se preferir,
// mas mantida aqui para demonstrar que é gerada dinamicamente para o efeito.
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}`;
document.head.appendChild(styleSheet);
