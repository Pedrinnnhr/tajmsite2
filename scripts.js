document.addEventListener('DOMContentLoaded', () => {
    const translateBtn = document.getElementById('translate-btn');
    const translateText = (lang) => {
        const elements = document.querySelectorAll('[data-pt], [data-en]');
        elements.forEach(el => {
            if (lang === 'en') {
                el.textContent = el.getAttribute('data-en') || el.textContent;
            } else {
                el.textContent = el.getAttribute('data-pt') || el.textContent;
            }
        });
    };

    translateBtn.addEventListener('click', () => {
        const currentLang = translateBtn.textContent === 'Traduzir' ? 'en' : 'pt';
        translateText(currentLang);
        translateBtn.textContent = currentLang === 'en' ? 'Traduzir' : 'Translate';
    });
});
