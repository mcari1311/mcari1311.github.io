let player = document.getElementById('player')
let computer = document.getElementById('computer')
let results = document.querySelector('.results')
let game = document.querySelector('.game')

let count = 0

// randomly move computer car to each column and keep score of how many pass
computer.addEventListener("animationiteration", function() {
    let randomDirection = ((Math.floor(Math.random() * 3))*130)
    computer.style.left = randomDirection+"px"
    count++
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