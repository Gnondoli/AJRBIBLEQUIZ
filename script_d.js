const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Dimensions de la zone de jeu
canvas.width = 400;
canvas.height = 400;

// Taille des éléments (serpent et nourriture)
const box = 25;

// Variables du jeu
let snake = [{ x: 9 * box, y: 9 * box }];
let direction = "RIGHT";
let food = {
  x: Math.floor(Math.random() * (canvas.width / box)) * box,
  y: Math.floor(Math.random() * (canvas.height / box)) * box,
};
let score = 0;

// Chargement des images
const snakeHeadImg = new Image();
snakeHeadImg.src = "snake-head.png";

const foodImg = new Image();
foodImg.src = "food.png";

// Contrôle du serpent avec les touches fléchées
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  const key = event.keyCode;
  if (key === 37 && direction !== "RIGHT") {
    direction = "LEFT";
  } else if (key === 38 && direction !== "DOWN") {
    direction = "UP";
  } else if (key === 39 && direction !== "LEFT") {
    direction = "RIGHT";
  } else if (key === 40 && direction !== "UP") {
    direction = "DOWN";
  }
}

// Génération de nourriture à une nouvelle position
function drawFood() {
  ctx.drawImage(foodImg, food.x, food.y, box, box);
}

// Mise à jour et dessin du serpent avec image
function drawSnake() {
  for (let i = 0; i < snake.length; i++) {
    if (i === 0) {
      // Tête du serpent
      ctx.drawImage(snakeHeadImg, snake[i].x, snake[i].y, box, box);
    } else {
      // Corps du serpent (utilisation de la même image de tête pour simplifier)
      ctx.drawImage(snakeHeadImg, snake[i].x, snake[i].y, box, box);
    }
  }
}

// Fonction principale pour mettre à jour la position du serpent et vérifier les conditions de jeu
function updateGame() {
  // Position de la tête du serpent
  let headX = snake[0].x;
  let headY = snake[0].y;

  // Direction du mouvement
  if (direction === "LEFT") headX -= box;
  if (direction === "UP") headY -= box;
  if (direction === "RIGHT") headX += box;
  if (direction === "DOWN") headY += box;

  // Vérification de la collision avec la nourriture
  if (headX === food.x && headY === food.y) {
    score++;
    document.getElementById("score").textContent = score;
    food = {
      x: Math.floor(Math.random() * (canvas.width / box)) * box,
      y: Math.floor(Math.random() * (canvas.height / box)) * box,
    };
  } else {
    snake.pop(); // Supprime la dernière cellule du serpent
  }

  // Ajoute une nouvelle tête
  const newHead = { x: headX, y: headY };

  // Vérification des collisions avec les bords ou avec le serpent lui-même
  if (
    headX < 0 ||
    headY < 0 ||
    headX >= canvas.width ||
    headY >= canvas.height ||
    collision(newHead, snake)
  ) {
    clearInterval(game); // Arrête le jeu
    alert("Game Terminé! Votre score : " + score);
    location.reload(); // Recharge la page
  }

  snake.unshift(newHead); // Ajoute la nouvelle tête au début du serpent

  // Nettoie le canvas et dessine les éléments du jeu
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFood();
  drawSnake();
}

// Vérification des collisions entre la tête du serpent et le corps
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x === array[i].x && head.y === array[i].y) {
      return true;
    }
  }
  return false;
}

// Lance le jeu à une vitesse déterminée
const game = setInterval(updateGame, 200);
