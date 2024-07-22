document.getElementById('translate-btn').addEventListener('click', () => {
    const elements = document.querySelectorAll('[data-pt], [data-en]');
    const isPortuguese = document.documentElement.lang === 'pt';

    elements.forEach(element => {
        const ptText = element.getAttribute('data-pt');
        const enText = element.getAttribute('data-en');
        
        if (isPortuguese) {
            element.textContent = enText;
        } else {
            element.textContent = ptText;
        }
    });

    document.documentElement.lang = isPortuguese ? 'en' : 'pt';
});
