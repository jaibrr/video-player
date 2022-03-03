let video = document.getElementById("video1")

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

let controles = document.querySelector("controle")

function showDisplay(){

    controles.style.opacity = "1";
    controles.style.transition = "1s"
}

function hideDisplay(){
    controles.style.opacity = "0";
}