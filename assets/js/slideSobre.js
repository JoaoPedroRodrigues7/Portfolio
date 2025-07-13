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

// A parte do CSS para a animação de rolagem já está no style.css,
// então não é necessário gerá-la dinamicamente aqui.
// Removido o código de criação de styleSheet para evitar duplicação.
