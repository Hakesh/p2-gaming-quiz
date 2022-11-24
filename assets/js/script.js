const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const resetButton = document.getElementById("reset-button");
const quizIntro = document.getElementById("quiz-intro");
const quizContainerElement = document.getElementById("quiz-container")
const userInfo = document.getElementById("user-info");

const questionElement = document.getElementById("quiz-questions");
const quizButtonsElement = document.getElementById("answer-buttons");

let ending = document.getElementById("ending");
let playerName = document.getElementById("player-name");
let failedTimer = document.getElementById("failed-timer");
let shuffledQuestions, currentQuestionIndex;

/**
 * Function that verifies that player name is at least 3 characters long
 * and gives red error message in the place holder text
 */
startButton.addEventListener("click", function() {

    let username = document.getElementById("player-name");
    let valid = username.checkValidity();
    if (valid) {
        runGame();
    }
    else {
        let usernameError = document.getElementById("player-name");
        usernameError.setAttribute("placeholder", "Minimum: 3 Characters")
        username.classList.add("username-error")
        username.value = "";
    }
});


/**
 * 
 */
resetButton.addEventListener("click", resetGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
})


/**
 * 
 */
function runGame() {
    resetScore();
    quizIntro.classList.add("hide");
    startButton.classList.add("hide");

    document.getElementById("username").innerText = playerName.value;
    userInfo.classList.remove("hide");

    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    quizContainerElement.classList.remove("hide");
    nextQuestion();
}


/**
 * 
 */
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(quizButtonsElement.firstChild) {
        quizButtonsElement.removeChild(quizButtonsElement.firstChild);
    }
}


/**
 * 
 */
function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}


/**
 * 
 */
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
        endScreen();
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

//Collects and counts the score from answering the quiz questions correctly
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

// Resets the score counter
function resetScore() {
    document.getElementById("score").innerText = "0";
}


// Resets the game back to the main menu / first scene and allows you to play again
function resetGame() {
    quizIntro.classList.remove("hide");
    quizContainerElement.classList.add("hide");
    userInfo.classList.add("hide");
    resetButton.classList.add("hide");
    startButton.classList.remove("hide")
    ending.classList.add("hide");
}


function endScreen() {

    // Credit for countdown code: Ali in https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
    let count = 5;
    let counter = setInterval(timer, 1000);
    userInfo.classList.add("hide");
    failedTimer.classList.remove("hide");

    function timer() {
        count = count-1;
        if(count <= 0) {
            clearInterval(counter);
            quizContainerElement.classList.add("hide");
            userInfo.classList.add("hide");
            failedTimer.classList.add("hide");
        
            ending.classList.remove("hide");
            resetButton.classList.remove("hide");

            let finalScore = document.getElementById("final-score");
            finalScore.innerText = document.getElementById("score").innerText;
        }
    }

}

// The constant array holding all of the questions and answers
const questions = [
    {
        question: "Which MMORPG boasted a massive 12 million players during the years 2009-2010?",
        answers: [
            { text: "Runescape", correct: false },
            { text: "Star Wars: The Old Republic", correct: false },
            { text: "World of Warcraft", correct: true },
            { text: "Guild Wars", correct: false }
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
            { text: "Kek", correct: false },
            { text: "No?", correct: false },
            { text: "???", correct: false }
        ]
    },
    {
        question: "How many classes can you play in the Destiny franchise?",
        answers: [
            { text: "1 Class", correct: false },
            { text: "3 Classes", correct: true },
            { text: "4 Classes", correct: false },
            { text: "6 Classes", correct: false }
        ]
    },
    {
        question: "Which publisher owns the well-known game 'Call of Duty'?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Activision", correct: true },
            { text: "Sony", correct: false },
            { text: "Tencent", correct: false }
        ]
    },
    {
        question: "What is the theme color for Sony's Playstation Consoles?",
        answers: [
            { text: "Green", correct: false },
            { text: "Purple", correct: false },
            { text: "Brown", correct: false },
            { text: "Blue", correct: true }
        ]
    },
    {
        question: "What kind of game is CSGO?",
        answers: [
            { text: "RPG", correct: false },
            { text: "FPS", correct: true },
            { text: "MMORPG", correct: false },
            { text: "Racing", correct: false }
        ]
    },
    {
        question: "What FPS franchise is Sweden well known for?",
        answers: [
            { text: "FPSRussia", correct: false },
            { text: "Apex Legends", correct: false },
            { text: "Battlefield", correct: true },
            { text: "PUBG", correct: false }
        ]
    },
    {
        question: "Which is the most popular streaming platform for games?",
        answers: [
            { text: "Youtube", correct: false },
            { text: "Twitch", correct: true },
            { text: "Mixer", correct: false },
            { text: "Facebook Live", correct: false }
        ]
    }
]