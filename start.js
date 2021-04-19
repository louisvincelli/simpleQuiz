var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
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
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion =() => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    //progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    //progressBarFull.style.width= `${(questionCounter/MAX_QUESTIONS) * 100}$`

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

        //event function and using event.target or e.target with e =>

        acceptingAnswers = false
        var selectedChoice = event.target
        var selectedAnswer = selectedChoice.dataset['number']

        //? and : are if or else function for the selected Answers.

        let classtoApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classtoApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        //selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classtoApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startQuiz()