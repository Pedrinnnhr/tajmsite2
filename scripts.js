document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('taj-mahal-video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const translateBtn = document.getElementById('translate-btn');

    const texts = {
        pt: {
            title: "Taj Mahal",
            historiaLink: "História",
            arquiteturaLink: "Arquitetura",
            significadoLink: "Significado Cultural",
            curiosidadesLink: "Curiosidades",
            galeriaLink: "Galeria",
            musicaLink: "Música",
            translateBtn: "Translate to English",
            historiaTitle: "História",
            historiaText: "O Taj Mahal foi construído pelo imperador Mughal Shah Jahan em memória de sua amada esposa Mumtaz Mahal. A construção começou em 1632 e foi concluída em 1653. O mausoléu é uma das sete maravilhas do mundo e é um exemplo impressionante da arquitetura Mughal. Sua construção envolveu milhares de trabalhadores e artesãos, e o projeto foi supervisionado por um grupo de arquitetos liderado por Ustad Ahmad Lahori.",
            arquiteturaTitle: "Arquitetura",
            arquiteturaText: "A arquitetura do Taj Mahal combina elementos de estilos islâmico, persa, otomano e indiano. O edifício principal é um enorme domo de mármore branco, ladeado por quatro minaretes, e está situado em um pátio com jardins perfeitamente simétricos. O mármore branco foi extraído de Makrana, no Rajastão, e é ornamentado com incrustações de pedras preciosas. O complexo inclui uma mesquita e uma casa de hóspedes, além dos famosos jardins e corredores de água que refletem o domo principal.",
            significadoTitle: "Significado Cultural",
            significadoText: "O Taj Mahal é um símbolo do amor eterno e uma obra-prima da arquitetura mundial. Sua construção é um tributo ao amor do imperador Shah Jahan por sua esposa Mumtaz Mahal. O mausoléu representa não apenas o amor, mas também o esplendor e a criatividade da cultura Mughal. O Taj Mahal é um Patrimônio Mundial da UNESCO e é considerado uma das mais grandiosas realizações da arquitetura islâmica. Sua beleza e a história por trás dele atraem milhões de visitantes de todo o mundo anualmente.",
            curiosidade1: "Curiosidade 1: A construção do Taj Mahal começou em 1632 e foi concluída em 1653, um projeto que levou mais de 20 anos para ser finalizado.",
            curiosidade2: "Curiosidade 2: O mármore branco usado na construção foi extraído de Makrana, no Rajastão, e as pedras preciosas que decoram o edifício foram trazidas de várias partes do mundo.",
            curiosidade3: "Curiosidade 3: Mais de 20.000 artesãos, trabalhadores e pedreiros participaram da construção do Taj Mahal, sob a supervisão de arquitetos e engenheiros.",
            curiosidade4: "Curiosidade 4: O Taj Mahal muda de cor dependendo da hora do dia e da estação do ano, variando de rosa suave ao branco brilhante e dourado.",
            curiosidade5: "Curiosidade 5: Existe uma lenda que diz que Shah Jahan planejava construir um segundo Taj Mahal em mármore negro do outro lado do rio Yamuna, mas nunca o fez devido à sua queda do poder.",
            curiosidade6: "Curiosidade 6: O Taj Mahal é conhecido por sua simetria perfeita e pelos jardins bem cuidados que representam o paraíso descrito no Alcorão.",
            galeriaTitle: "Galeria",
            musicaTitle: "Música",
        },
        en: {
            title: "Taj Mahal",
            historiaLink: "History",
            arquiteturaLink: "Architecture",
            significadoLink: "Cultural Significance",
            curiosidadesLink: "Curiosities",
            galeriaLink: "Gallery",
            musicaLink: "Music",
            translateBtn: "Translate to Portuguese",
            historiaTitle: "History",
            historiaText: "The Taj Mahal was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Construction began in 1632 and was completed in 1653. The mausoleum is one of the Seven Wonders of the World and is a stunning example of Mughal architecture. Its construction involved thousands of workers and artisans, and the project was overseen by a team of architects led by Ustad Ahmad Lahori.",
            arquiteturaTitle: "Architecture",
            arquiteturaText: "The architecture of the Taj Mahal combines elements of Islamic, Persian, Ottoman, and Indian styles. The main building is a massive white marble dome, flanked by four minarets, and sits in a courtyard with perfectly symmetrical gardens. The white marble was sourced from Makrana in Rajasthan and is adorned with inlaid precious stones. The complex includes a mosque and a guest house, as well as the famous gardens and water channels that reflect the main dome.",
            significadoTitle: "Cultural Significance",
            significadoText: "The Taj Mahal is a symbol of eternal love and a masterpiece of world architecture. Its construction is a tribute to Emperor Shah Jahan's love for his wife Mumtaz Mahal. The mausoleum represents not only love but also the splendor and creativity of Mughal culture. The Taj Mahal is a UNESCO World Heritage Site and is considered one of the grandest achievements of Islamic architecture. Its beauty and the story behind it attract millions of visitors from around the world annually.",
            curiosidade1: "Curiosity 1: The construction of the Taj Mahal began in 1632 and was completed in 1653, a project that took over 20 years to finish.",
            curiosidade2: "Curiosity 2: The white marble used in the construction was sourced from Makrana in Rajasthan, and the precious stones that decorate the building were brought from various parts of the world.",
            curiosidade3: "Curiosity 3: More than 20,000 artisans, workers, and masons participated in the construction of the Taj Mahal, under the supervision of architects and engineers.",
            curiosidade4: "Curiosity 4: The Taj Mahal changes color depending on the time of day and the season, ranging from soft pink to bright white and gold.",
            curiosidade5: "Curiosity 5: There is a legend that Shah Jahan planned to build a second Taj Mahal in black marble on the other side of the Yamuna River, but never did due to his fall from power.",
            curiosidade6: "Curiosity 6: The Taj Mahal is known for its perfect symmetry and the well-maintained gardens that represent the paradise described in the Quran.",
            galeriaTitle: "Gallery",
            musicaTitle: "Music",
        }
    };

    let currentLanguage = 'pt';

    function updateText(language) {
        document.getElementById('title').textContent = texts[language].title;
        document.getElementById('historia-link').textContent = texts[language].historiaLink;
        document.getElementById('arquitetura-link').textContent = texts[language].arquiteturaLink;
        document.getElementById('significado-link').textContent = texts[language].significadoLink;
        document.getElementById('curiosidades-link').textContent = texts[language].curiosidadesLink;
        document.getElementById('galeria-link').textContent = texts[language].galeriaLink;
        document.getElementById('musica-link').textContent = texts[language].musicaLink;
        translateBtn.textContent = texts[language].translateBtn;

        document.getElementById('historia-title').textContent = texts[language].historiaTitle;
        document.getElementById('historia-text').textContent = texts[language].historiaText;
        document.getElementById('arquitetura-title').textContent = texts[language].arquiteturaTitle;
        document.getElementById('arquitetura-text').textContent = texts[language].arquiteturaText;
        document.getElementById('significado-title').textContent = texts[language].significadoTitle;
        document.getElementById('significado-text').textContent = texts[language].significadoText;
        document.getElementById('curiosidade1').textContent = texts[language].curiosidade1;
        document.getElementById('curiosidade2').textContent = texts[language].curiosidade2;
        document.getElementById('curiosidade3').textContent = texts[language].curiosidade3;
        document.getElementById('curiosidade4').textContent = texts[language].curiosidade4;
        document.getElementById('curiosidade5').textContent = texts[language].curiosidade5;
        document.getElementById('curiosidade6').textContent = texts[language].curiosidade6;
        document.getElementById('galeria-title').textContent = texts[language].galeriaTitle;
        document.getElementById('musica-title').textContent = texts[language].musicaTitle;
    }

    translateBtn.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        updateText(currentLanguage);
    });

    playPauseBtn.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause Música';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play Música';
        }
    });
});
