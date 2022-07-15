let player = document.getElementById('player')
let computer = document.getElementById('computer')
let results = document.querySelector('.results')
let game = document.querySelector('.game')
let score = document.getElementById('score')
let nextLevelButton = document.getElementById('nextLevel')
let characterBox = document.querySelector('.chooseCharacter')
let computer2 = document.getElementById('computer2')
let count = 0

function changeCar() {
    document.getElementById('players').src="images/bugatti.png"
    
}
function changeCarA() {
    document.getElementById('players').src="images/ferrari.png"

}
function changeCarB() {
    document.getElementById('players').src="images/aston-martin.png"
}

// randomly move computer car to each column and keep score of how many pass
computer.addEventListener("animationiteration", function() {
    let randomDirection = ((Math.floor(Math.random() * 4))*130)
    computer.style.left = randomDirection+"px"
    count++
    score.innerHTML = `SCORE: ${count}`

})
// again for computer 2
computer2.addEventListener("animationiteration", function() {
    let randomDirection = ((Math.floor(Math.random() * 4))*130)
    computer.style.left = randomDirection+"px"
    count++
    score.innerHTML = `SCORE: ${count}`

})

//make player car able to move
window.addEventListener("keydown", function(e) {
    if(e.keyCode == '39') {
        let playerleft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
        if(playerleft<260) {
            player.style.left = (playerleft + 130) +'px'
        }
    }
    if(e.keyCode=='37'){
        let playerleft =  parseInt(window.getComputedStyle(player).getPropertyValue("left"))
            if(playerleft>0) {
                player.style.left = (playerleft-130)+'px'
            }
    }
})

//what happens if collison -> game over 
setInterval(function Gameover() {
    let computerTop = parseInt(window.getComputedStyle(computer).getPropertyValue('top'))
    let computerLeft = parseInt(window.getComputedStyle(computer).getPropertyValue('left')) 
    let playerleft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))

    if((computerLeft === playerleft)&&(computerTop>250)&&(computerTop<450)) {
        game.style.display = 'none'
        nextLevelButton.style.display = 'block'
        score.innerHTML = `SCORE: ${count}`
        characterBox.style.display='none'
    }
}, 5)

setInterval(function Gameover() {
    let computer2Top = parseInt(window.getComputedStyle(computer2).getPropertyValue('top'))
    let computer2Left = parseInt(window.getComputedStyle(computer2).getPropertyValue('left')) 
    let playerleft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))

    if((computer2Left === playerleft)&&(computer2Top>250)&&(computer2Top<450)) {
        game.style.display = 'none'
        nextLevelButton.style.display = 'block'
        score.innerHTML = `SCORE: ${count}`
        characterBox.style.display='none'
    }
}, 5)



