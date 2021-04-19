var highScoresList = document.querySelector('#highScoresList')
var highScores = JSON.parse(localStorage.getItem('highScores'))

highScoresList.innerHTML = 0
highScores.map(score => {
    return '<ul class="high-score"></ul>'
}).join('')

//function to put the highscore into the high-score class listed.