const verses = [
    {
        verse: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle. (Jean 3:16)",
        missing: "Fils",
        options: ["Fils", "Chien", "Arbre", "Maison"]
    },
    {
        verse: "Je puis tout par celui qui me fortifie. (Philippiens 4:13)",
        missing: "tout",
        options: ["rien", "tout", "beaucoup", "peu"]
    },
    {
        verse: "Le Seigneur est mon berger: je ne manquerai de rien. (Psaume 23:1)",
        missing: "berger",
        options: ["berger", "roi", "prêtre", "guerrier"]
    },
    {
        verse: "Que dirons-nous donc à l'égard de ces choses ? Si Dieu est pour nous, qui sera contre nous ? (Romain 8:31)",
        missing: "dirons-nous",
        options: ["serons-nous", "dirons-nous", "ferons-nous", "pensons-nous"]
    },
    {
        verse: "Si quelqu'un est en Christ, il est une nouvelle créature. Les choses anciennes sont passées; voici toutes choses sont devenues nouvelles. (2 Corinthiens 5:17)",
        missing: "nouvelles",
        options: ["bonnes", "parfaites", "anciennes", "nouvelles"]
    },
    {
        verse: "Car l'à ou deux ou trois sont assemblés en mon nom, je suis au milieu d'eux. (Matthieu 18:20)",
        missing: "milieu",
        options: ["prêt", "dessus", "milieu", "tour"]
    },
    {
        verse: "Il leur dit: Suivez-moi, et je vous ferai pêcheurs d'hommes. (Matthieu 4:19)",
        missing: "Suivez-moi",
        options: ["Croyez-moi", "Suivez-moi", "Aimez-moi", "Fuyez-moi"]
    },
    {
        verse: "Car tous ont péché et sont privés de la gloire de Dieu. (Romains 3:23)",
        missing: "gloire",
        options: ["bonté", "joie", "paix", "gloire"]
    },
    {
        verse: "Je puis tout par celui qui me fortifie. (Philippiens 4:13)",
        missing: "fortifie",
        options: ["fortifie", "console", "garde", "sauve"]
    },
    {
        verse: "Je serre ta parole dans mon coeur, Afin de ne pas pécher contre toi. (Psaumes 119:11)",
        missing: "parole",
        options: ["bonté", "parole", "vie", "esprit"]
    },
];


let currentVerseIndex = 0;

function showVerse() {
    const verseContainer = document.getElementById('verse-container');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result');
    const nextButton = document.getElementById('next-button');

    const currentVerse = verses[currentVerseIndex];

    // Afficher le verset avec un espace pour le mot manquant
    verseContainer.innerHTML = currentVerse.verse.replace(currentVerse.missing, '_____');
    resultContainer.innerHTML = '';

    // Afficher les options
    optionsContainer.innerHTML = '';
    currentVerse.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.innerText = option;
        optionDiv.classList.add('option');
        optionDiv.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(optionDiv);
    });

    nextButton.style.display = 'none';
}

function selectOption(selected) {
    const currentVerse = verses[currentVerseIndex];
    const resultContainer = document.getElementById('result');
    const nextButton = document.getElementById('next-button');

    resultContainer.classList.remove('slideIn'); // Reset animation
    resultContainer.offsetHeight; // Trigger reflow
    resultContainer.classList.add('slideIn'); // Reapply animation

    if (selected === currentVerse.missing) {
        resultContainer.innerText = "Correct !";
    } else {
        resultContainer.innerText = "Faux, réessaye !";
    }

    nextButton.style.display = 'block';
}



document.getElementById('next-button').addEventListener('click', () => {
    currentVerseIndex++;
    if (currentVerseIndex < verses.length) {
        showVerse();
    } else {
        alert('Bravo ! Vous avez terminé le jeu !');
        currentVerseIndex = 0; // Recommencer le jeu
        showVerse();
    }
});

// Démarrer le jeu
showVerse();
