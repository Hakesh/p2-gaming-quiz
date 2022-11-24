const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const quizIntro = document.getElementById("quiz-intro");
const quizContainerElement = document.getElementById("quiz-container")
const userInfo = document.getElementById("user-info");

const questionElement = document.getElementById("quiz-questions");
const quizButtonsElement = document.getElementById("answer-buttons");

let playerName = document.getElementById("player-name");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", runGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
})

function runGame() {
    resetScore();
    quizIntro.classList.add("hide");
    startButton.classList.add("hide");

    document.getElementById("username").innerText = playerName.value;
    userInfo.classList.remove("hide");
    console.log(username);
    console.log(playerName.value)

    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    quizContainerElement.classList.remove("hide");
    nextQuestion();
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(quizButtonsElement.firstChild) {
        quizButtonsElement.removeChild(quizButtonsElement.firstChild);
    }
}

function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
    questionElement.innerText = question.question;

    question.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("quiz-button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        quizButtonsElement.appendChild(button);
    })

}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(quizButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    
    if(selectedButton.dataset.correct) {
        incrementScore();
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        console.log("Check question length");
        nextButton.classList.remove("hide");
    }
    else {
        console.log("ran out of questions");
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }

}


function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    }
    else {
        element.classList.add("wrong");
    }
}


function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");

}

function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function resetScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = "0";
}

const questions = [
    {
        question: "Which MMORPG boasted a massive 12 million players during 2009-2010?",
        answers: [
            { text: "Runescape", correct: false },
            { text: "DOTA", correct: false },
            { text: "World of Warcraft", correct: true },
            { text: "League of Legends", correct: false }
        ]
    },
    {
        question: "Whats the name of the main protaganist in the legendary Halo franchise?",
        answers: [
            { text: "John Halo", correct: false },
            { text: "Master Cheeks", correct: false },
            { text: "Captain Price", correct: false },
            { text: "Master Chief", correct: true }
        ]
    },
    {
        question: "What is the most played game of all time?",
        answers: [
            { text: "Minecraft", correct: false },
            { text: "Candy Crush Saga", correct: true },
            { text: "Fortnite", correct: false },
            { text: "Grand Theft Auto", correct: false }
        ]
    },
    {
        question: "Zug Zug?",
        answers: [
            { text: "Zug Zug", correct: true },
            { text: "Yes", correct: false },
            { text: "No?", correct: false },
            { text: "???", correct: false }
        ]
    },
    {
        question: "What publisher owns the well-known game 'Call of Duty'?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Activision", correct: true },
            { text: "Sony", correct: false },
            { text: "Tencent", correct: false }
        ]
    }
]