const colors = ["red", "orange", "yellow", "chartreuse", "green", "springgreen", "cyan", "azure", "blue", "violet", "magenta", "rose"];
const clickMe = document.getElementById("click-btn");
const color = document.querySelector(".color");
const mainEl = document.querySelector("main");
const audio = new Audio();

audio.src = "./click.mp3";

clickMe.addEventListener("click", function(){
    audio.play();
    let randomNum = getRandom();
    // console.log(randomNum);

    mainEl.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
})

function getRandom(){
    return Math.floor(Math.random()*colors.length);
}