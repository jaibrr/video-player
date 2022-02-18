let video = document.getElementById("video")
let video = document.querySelector("video")

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
    video.currentTime = 0
}


// controle
let controle = document.getElementById("div.controle");

function apareceControle(){
    controle.style.visibility = "visible";
    console.log("Apareceu");
}

function desapareceControle(){
    controle.style.visibility = "hidden";
    console.log("Desapareceu");
}
