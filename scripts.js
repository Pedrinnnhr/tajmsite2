document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translate-btn');
    let isEnglish = false;

    translateBtn.addEventListener('click', function() {
        const elements = document.querySelectorAll('[data-pt], [data-en]');

        elements.forEach(el => {
            const ptText = el.getAttribute('data-pt');
            const enText = el.getAttribute('data-en');

            if (isEnglish) {
                el.textContent = ptText || el.textContent;
            } else {
                el.textContent = enText || el.textContent;
            }
        });

        isEnglish = !isEnglish;
        translateBtn.textContent = isEnglish ? 'Traduzir para Português' : 'Translate to English';
    });
});
