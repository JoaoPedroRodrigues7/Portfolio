document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) { // Botões aparecem após rolar 200px
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500); // Tempo de transição para desaparecer
        }
    }

    document.addEventListener('scroll', toggleButtons);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    whatsappButton.addEventListener('click', function () {
        // Substitua pelo seu número de WhatsApp com DDD, exemplo: '5521987654321'
        window.open('https://wa.me/5588988796132', '_blank');
    });

    // Garante que os botões apareçam se a página já estiver rolada ao carregar
    toggleButtons();
});
