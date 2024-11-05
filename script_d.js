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

// Images pour le serpent et la nourriture
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

// Ajout des événements pour les boutons de contrôle tactiles
document.getElementById("upBtn").addEventListener("click", () => {
  if (direction !== "DOWN") direction = "UP";
});

document.getElementById("leftBtn").addEventListener("click", () => {
  if (direction !== "RIGHT") direction = "LEFT";
});

document.getElementById("downBtn").addEventListener("click", () => {
  if (direction !== "UP") direction = "DOWN";
});

document.getElementById("rightBtn").addEventListener("click", () => {
  if (direction !== "LEFT") direction = "RIGHT";
});

// Génération de nourriture
function drawFood() {
  ctx.drawImage(foodImg, food.x, food.y, box, box);
}

// Dessine le serpent avec image
function drawSnake() {
  for (let i = 0; i < snake.length; i++) {
    if (i === 0) {
      ctx.drawImage(snakeHeadImg, snake[i].x, snake[i].y, box, box); // Tête
    } else {
      ctx.drawImage(snakeHeadImg, snake[i].x, snake[i].y, box, box); // Corps
    }
  }
}

// Mise à jour du jeu
function updateGame() {
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
    snake.pop(); // Supprime la dernière cellule
  }

  // Ajoute la nouvelle tête
  const newHead = { x: headX, y: headY };

  // Vérification des collisions
  if (
    headX < 0 ||
    headY < 0 ||
    headX >= canvas.width ||
    headY >= canvas.height ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    alert("Game Over! Votre score : " + score);
    location.reload();
  }

  snake.unshift(newHead);

  // Efface et redessine le jeu
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFood();
  drawSnake();
}

// Vérification des collisions avec le corps du serpent
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x === array[i].x && head.y === array[i].y) {
      return true;
    }
  }
  return false;
}

// Lancement du jeu
const game = setInterval(updateGame, 200);
