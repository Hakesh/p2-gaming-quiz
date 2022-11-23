const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const quizIntro = document.getElementById("quiz-intro");
const quizContainerElement = document.getElementById("quiz-container")
const userInfo = document.getElementById("user-info");

const questionElement = document.getElementById("quiz-questions");
const quizButtonsElement = document.getElementById("answer-buttons");

let inputName = document.getElementById("name-input");
let username = document.getElementById("username");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", runGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
})

function runGame() {
    quizIntro.classList.add("hide");
    startButton.classList.add("hide");

    username.innerText = inputName.value
    userInfo.classList.remove("hide");
    console.log(username);

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
        incrementScore();
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

const questions = [
    {
        question: "Zug Zug?",
        answers: [
            { text: "Zug Zug", correct: true },
            { text: "Yes", correct: false },
            { text: "No?", correct: false },
            { text: "???", correct: false }
        ]
    }
]