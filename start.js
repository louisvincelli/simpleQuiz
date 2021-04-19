var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is the capital of Japan?',
        choice1: 'Kyoto',
        choice2: 'Tokyo',
        choice3: 'Yokohama',
        choice4: 'Nagoya',
        answer: 2,
    },
    {
        question: 'What is the capital of Brazil?',
        choice1: 'Rio de Janeiro',
        choice2: 'Brasilia',
        choice3: 'Sao Paolo',
        choice4: 'Goiania',
        answer: 2,
    },
    {
        question: 'What is the capital of China?',
        choice1: 'Shanghai',
        choice2: 'Beijing',
        choice3: 'Hong Kong',
        choice4: 'Wuhan',
        answer: 2,

    },
    {
        question: 'What is the capital of Italy?',
        choice1: 'Venice',
        choice2: 'Rome',
        choice3: 'Florence',
        choice4: 'Milan',
        answer: 2,
    },
    {
        question: 'What is 2+2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    }
]

var SCORE_POINTS = 1
var MAX_QUESTIONS = 5

startQuiz = () => {
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}


// function for new question
getNewQuestion =() => {
    if(availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', function(event) {
        if(!acceptingAnswers) return

        //event function 

        acceptingAnswers = false
        var selectedChoice = event.target
        var selectedAnswer = selectedChoice.dataset['number']

        //? is if and : is else for the selected Answers.

        let classtoApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        //if the selected answer is correct then increment points

        if(classtoApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classtoApply)
            getNewQuestion()

        }, 1000)
    })
})

//increasescore. the scoretext is the score.

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

//start entire quiz function

startQuiz()