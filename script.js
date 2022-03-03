let video = document.getElementById("video1")
let controles = document.getElementById("controle")

function back(){
    video.currentTime -= 2
}

function forward(){
    video.currentTime += 2
}

function play(){
    video.play()
}

function pause(){
    video.pause()
}


function stop(){
    video.pause()
    video.currentTime = 0
}

function fullscreen(){
    video.requestFullscreen()
}

function showControl(){
    controle.style.display = "block"
}
function hideControl(){
    controle.style.display = "none"
}