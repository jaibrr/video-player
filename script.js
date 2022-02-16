let video = document.getElementById("video1");

function back(){
    video.currentTime -= 2
}

function forward(){
    video.currentTime += 2
}


function dowvvel(){
    video.playbackRate -= 0.1
}

function upvel(){
    video.playbackRate += 0.1
}


function play(){
    video.play()
}

function pause(){
    video.pause()
    video.currentTime = o
}

/* function onOver(elemento){
    elemento.style.display = ""
}

function onOut(elemento){
    elemento.style.display = "none"
} */

/* let image = document.getElementById("like")

image.addEventListener("click", function(){

    if (image.src = "./img/thumbs-up.png"){
        image.setAttribute("src", "./img/thumbs-down.png")
        image.setAttribute("width", "100px")
        image.setAttribute("heigh", "100px")
    } 
    
    if (image.src = "./img/thumbs-down.png"){
        image.setAttribute("src", "./img/thumbs-up.png")
        image.setAttribute("width", "100px")
        image.setAttribute("heigh", "100px")
    }

}) */