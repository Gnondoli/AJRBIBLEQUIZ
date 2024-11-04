const quizData = [
    {
        question: "Qui a baptisé Jésus ?",
        answers: ["Pierre", "Jean-Baptiste", "Paul", "Moïse"],
        correct: 1
    },
    {
        question: "Quel est le premier miracle de Jésus dans le Nouveau Testament ?",
        answers: ["Guérison d'un lépreux", "Multiplication des pains", "Transformation de l'eau en vin", "Marche sur l'eau"],
        correct: 2
    },
    {
        question: "Combien de disciples Jésus a-t-il choisis pour être ses apôtres ?",
        answers: ["10", "12", "7", "5"],
        correct: 1
    },
    {
        question: "Quel apôtre a renié Jésus trois fois ?",
        answers: ["Jacques", "Jean", "Pierre", "André"],
        correct: 2
    },
    {
        question: "Où Jésus est-il né ?",
        answers: ["Nazareth", "Bethléem", "Jérusalem", "Capharnaüm"],
        correct: 1
    },

    //suite
    {
        question: "Qui est le disciple et successeur d’Elie. ?",
        answers: ["Ezéchiel", "Elisée", "Esaïe", "Joseph"],
        correct: 1
    },
    {
        question: "Quel est le 1er péché mentionné dans la Bible ?",
        answers: ["Vol", "Mensonge", "Désobéissance", "Meurtre"],
        correct: 2
    },
    {
        question: "Qui a trahi Jésus pour trente pièces d’Argent ?",
        answers: ["Pierre", "Judas", "Thomas", "Jean"],
        correct: 1
    },
    {
        question: "Dans Romains 6, quel est le salaire du péché ?",
        answers: ["La mort", "La pauvreté", "L'exil", "La prison"],
        correct: 0
    },
    {
        question: "Quel Apôtre a écrit que l’Amour de l’Argent est la racine de tous les maux ?",
        answers: ["Paul", "Pierre", "Jean", "André"],
        correct: 0
    },
    {
        question: "Quel Roi a commis l’adultère et le meurtre mais a été pardonné s’être repenti ?",
        answers: ["Saul", "David", "Salomon", "Samson"],
        correct: 1
    },
    {
        question: "Qui a été le premier homme selon la Bible ?",
        answers: ["Moïse", "Noé", "Adam", "Abraham"],
        correct: 2
    },
    {
        question: "Qui a été jeté dans une fosse aux lions ?",
        answers: ["Pierre", "David", "Elie", "Daniel"],
        correct: 3
    },
    {
        question: "Quel prophète a été avalé par un grand poisson ?",
        answers: ["Elie", "Esaïe", "Jonas", "Daniel"],
        correct: 2
    },
    {
        question: "Qui a été le premier Roi d’Israël dans la Bible ?",
        answers: ["David", "Saül", "Salomon", "Samson"],
        correct: 1
    },
    {
        question: "Dans quel livre trouve-t-on la création du Monde ?",
        answers: ["Exode", "Genèse", "Lévitique", "Nombre"],
        correct: 1
    },
    {
        question: "Quel Roi Biblique est célèbre pour la construction des 1erTemple de Jérusalem ?",
        answers: ["David", "Josué", "Salomon", "Saül"],
        correct: 2
    },
    {
        question: "Qui a écrit l’Apocalypse dans le Nouveau Testament ?",
        answers: ["Pierre", "Paul", "Jean", "Jacques"],
        correct: 2
    },
    {
        question: "Quelle est la ville natale de Jésus ?",
        answers: ["Nazareth", "Bethléem", "Jérusalem", "Judée"],
        correct: 1
    },
    {
        question: "Quel Apôtre a été chargé par Jésus de paître ses brebis ?",
        answers: ["Pierre", "Paul", "Jean", "Matthieu"],
        correct: 0
    },
    {
        question: "Qui était le frère aîné de Moïse ?",
        answers: ["Aaron", "Samuel", "David", "Salomon"],
        correct: 0
    },
    {
        question: "Qu'a fait Dieu au commencement ?",
        answers: ["Dieu créa les cieux et la terre", "Dieu créa l'homme et la femme", "Dieu créa les animaux", "Dieu créa les arbres frutiers"],
        correct: 0
    },
    {
        question: "Selon Jésus, combien de fois devait-on pardonner à son frère ?",
        answers: ["7 fois", "70 fois", "70 x 7 fois", "7 x 7 fois"],
        correct: 2
    },
    {
        question: "Combien de temps Moïse a-t-il vécu avant sa mort ?",
        answers: ["80 ans", "120 ans", "100 ans", "150 ans"],
        correct: 1
    },
    {
        question: "Qui a reçu les 10 commandements de Dieu sur le mont Sinaï ?",
        answers: ["Moïse", "Aaron", "Josué", "Joseph"],
        correct: 0
    },
    {
        question: "Qui a été le père des 12 fils à l’origine des 12 tribus d’Israël ?",
        answers: ["Abraham", "Jacob", "Isaac", "Joseph"],
        correct: 1
    },
    {
        question: "Combien de jours et de nuits a duré le déluge de Noé ?",
        answers: ["40 jours et 40 nuits", "30 jours et 30 nuits", "45 jours et 45 nuits", "10 jours et 10 nuits"],
        correct: 0
    },
    {
        question: "Combien de disciples Jésus avait-il ?",
        answers: ["7", "12", "15", "5"],
        correct: 1
    },
    {
        question: "Qui a écrit les Actes ?",
        answers: ["Pierre", "Jean", "Jacques", "Luc"],
        correct: 3
    },
    {
        question: "Qui a évangélisé l’eunuque éthiopien ?",
        answers: ["Pierre", "Philippe", "Jean", "Jacques"],
        correct: 1
    },
    {
        question: "Quel est le chapitre le plus court de la Bible ?",
        answers: ["Jean 11", "Psaume 117", "Luc 2", "Actes 8"],
        correct: 1
    },
    {
        question: "Combien y a t-il eu de prophètes de Baal ?",
        answers: ["450", "120", "50", "500"],
        correct: 0
    },
    {
        question: "Savez-vous qui est Jésus Christ ?",
        answers: ["C'est Jean baptiste", "Jésus Christ est le Messie, le fils du Dieu vivant.", "C'est le prophète Elie", "C'est un officier de guerre"],
        correct: 1
    },
    {
        question: "Peux-tu nommer une sorte d'arbre mentionné dans la Bible dans cette liste ?",
        answers: ["Oranger", "Sycomore", "Manguier", "Bananier"],
        correct: 1
    },
    {
        question: "Peux-tu nommer une personne à qui un ange est apparu ?",
        answers: ["Marie", "Esther", "André", "Jacques"],
        correct: 0
    },
    {
        question: "Qui a déplacé la pierre avec laquelle le tombeau de Jésus a été recouvert ?",
        answers: ["Pierre", "Philippe", "Jean", "un ange du Seigneur"],
        correct: 3
    },
    {
        question: "Quel est le livre le plus court de la Bible ?",
        answers: ["1 Pierre 2", "Luc 10", "2 Jean 1-13", "Actes 2"],
        correct: 2
    },
    {
        question: "Quel homme n'est pas mort selon la Bible ?",
        answers: ["Hénoc", "Moïse", "Joseph", "Daniel"],
        correct: 0
    },
    {
        question: "Comment David a-t-il tué Goliath ?",
        answers: ["une flêche", "une fronde", "un bâton", "un fer"],
        correct: 1
    },
    {
        question: "Combien y a-t-il de livres dans le Nouveau Testament ?",
        answers: ["13", "30", "27", "17"],
        correct: 2
    },
    {
        question: "Quels sont le premier et le dernier livre du Nouveau Testament ?",
        answers: ["Matthieu et l'Apocalypse", "Actes et Romain", "Jean et Ephésien", "Jean et Pierre"],
        correct: 0
    },
    {
        question: "Qui porta la croix de Jésus ?",
        answers: ["Pierre", "Philippe", " Simon de Cyrène", "Jacques"],
        correct: 2
    },
    {
        question: "Quel disciple suivit Jésus de loin ?",
        answers: ["Pierre", "Philippe", "Matthieu", "Jacques"],
        correct: 0
    },
    {
        question: "Que fit Pierre après avoir renié 3 fois Jésus ?",
        answers: ["La fuite", " Il pleura amèrement", "Il était content", "Il se tua"],
        correct: 1
    },
    {
        question: "Où était Jésus quand il fut arrêté ?",
        answers: ["Dans la montagne", "Chez lui", "Dans le jardin de Gethsémani", "Dans une fête"],
        correct: 2
    },
    {
        question: "Où Joseph s'enfuit-il pour sauver Jésus d'Hérode ?",
        answers: ["En Judée", "En Égypte", "Jérusalem", "Bethléem"],
        correct: 1
    },
    {
        question: "Qui a dit« Si je ne vois dans ses mains la marque des clous … je ne croirai point » ?",
        answers: ["Pierre", "Philippe", "Jean", "Thomas"],
        correct: 3
    },
    {
        question: "Qui a dit « Il faut que vous naissiez de nouveau » ?",
        answers: ["Jésus à Pierre", "Jésus à Jean", "Jésus à Nicodème", "Jésus à Jacques"],
        correct: 2
    },
    {
        question: "Qui a dit « Seigneur, combien de fois pardonnerai-je à mon frère » ?",
        answers: ["Jean à Jésus", "Pierre à Jésus", "Matthieu à Jésus", "Jacques à Jésus"],
        correct: 1
    },
    {
        question: "Peux-tu nommer un péché ?",
        answers: ["La bonté", "adultère", "Vérité", "douceur"],
        correct: 1
    },

    
    
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Mélange des questions et réponses
function initializeQuiz() {
    shuffleArray(quizData);
    quizData.forEach(shuffleAnswers);
}

// Fonction pour mélanger les réponses et ajuster l'indice correct
function shuffleAnswers(quizItem) {
    const answersWithIndices = quizItem.answers.map((answer, index) => ({ answer, index }));
    shuffleArray(answersWithIndices);
    quizItem.answers = answersWithIndices.map(item => item.answer);
    quizItem.correct = answersWithIndices.findIndex(item => item.index === quizItem.correct);
}

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    const questionEl = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");

    questionEl.innerText = currentQuizData.question;
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuizData.answers[index];
        button.classList.remove("selected");
    });
    selectedAnswer = null;
}

function selectAnswer(answerIndex) {
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button, index) => {
        button.classList.toggle("selected", index === answerIndex);
    });
    selectedAnswer = answerIndex;
}

function submitAnswer() {
    if (selectedAnswer === null) return;

    const correctAnswer = quizData[currentQuestion].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        displayScore();
    }
}

function displayScore() {
    const quizContainer = document.getElementById("quiz");
    const totalQuestions = quizData.length;
    const averageScore = totalQuestions / 2;

    if (score >= averageScore) {
        quizContainer.innerHTML = `<h2>🎉 Félicitations ! Vous avez obtenu ${score} sur ${totalQuestions} points ! 🎉</h2>`;
    } else {
        quizContainer.innerHTML = `<h2>😢 Vous avez obtenu ${score} sur ${totalQuestions} points. Réessayez ! 😢</h2>,<br><h2><a href="index.html">Passez suivant ==></a></h2>`;
    }
}

// Initialiser le quiz au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    initializeQuiz();
    loadQuiz();
});
