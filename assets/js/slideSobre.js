document.addEventListener('DOMContentLoaded', function () {
    const headlineScroll = document.getElementById('headline-scroll');
    if (headlineScroll) { // Verifica se o elemento existe
        const clone = headlineScroll.cloneNode(true);
        headlineScroll.parentNode.appendChild(clone);

        // Define a largura dos elementos com base na largura do conteúdo
        const scrollWidth = headlineScroll.scrollWidth;
        headlineScroll.style.width = `${scrollWidth}px`;
        clone.style.width = `${scrollWidth}px`;
    }
});
