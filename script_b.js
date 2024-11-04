const characters = [
    { name: 'Moïse', img: 'moise.jpg' },
    { name: 'David', img: 'david.jpg' },
    { name: 'Marie', img: 'marie.jpg' },
    { name: 'Jésus', img: 'jesus.jpg' },
];

let gameCards = [...characters, ...characters];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createCard(character) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = character.name;

    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = '?';

    const back = document.createElement('div');
    back.classList.add('back');
    const img = document.createElement('img');
    img.src = character.img;
    img.alt = character.name;
    back.appendChild(img);

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', flipCard);

    return card;
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
    if (isMatch) {
        updateScore();
    }
}

function updateScore() {
    score++;
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score}`;

    // Afficher le GIF
    const scoreGif = document.getElementById('score-gif');
    scoreGif.style.display = 'block';

    setTimeout(() => {
        scoreGif.style.display = 'none';
    }, 1000);

    // Animation de l'affichage du score
    scoreDisplay.classList.add('fade');
    setTimeout(() => {
        scoreDisplay.classList.remove('fade');
    }, 1000);
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function setupGame() {
    shuffle(gameCards);
    const board = document.getElementById('game-board');
    board.innerHTML = ''; // Reset the board
    gameCards.forEach(character => {
        const card = createCard(character);
        board.appendChild(card);
    });
    score = 0; // Réinitialiser le score
    document.getElementById('score').textContent = `Score: ${score}`; // Afficher le score réinitialisé
}

// Écouteur d'événements pour le bouton de redémarrage
document.getElementById('restart-button').addEventListener('click', setupGame);

// Initialisation du jeu
setupGame();
