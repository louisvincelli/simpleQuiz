var highScoresList = document.querySelector('#highScoresList')
var highScores = JSON.parse(localStorage.getItem('highScores'))

highScoresList.innerHTML = 0
highScores.map(score => {
    return '<li class="high-score"></li>'
}).join('')