const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const clickMe = document.getElementById("click-btn");
const color = document.querySelector(".color");
const mainEl = document.querySelector("main");
const audio = new Audio();

audio.src = "./click.mp3";

clickMe.addEventListener("click", function(){
    audio.play();
    let hexVal = "#";
    for(let i=0; i<6; i++){
        hexVal+= arr[getRandom()];
    }
    // console.log(hexVal);

    mainEl.style.backgroundColor = hexVal;
    color.textContent = hexVal;
})

function getRandom(){
    return Math.floor(Math.random()*arr.length);
}