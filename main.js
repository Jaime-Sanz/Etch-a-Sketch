populateContainer(16);
let color = "black"
let colors = ["Red", "Orange", "Yellow", "Green", "Blue","Indigo", "Violet"];
let shakeNumber = 16;
let toggle = false;

function populateContainer(size){
let divContainer = document.getElementById('main-container');
let squares = divContainer.querySelectorAll('div');
squares.forEach((div) => div.remove());
divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size * size;

for (let i = 0; i < amount; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', squareColor);
    square.style.border = "1px solid black";
    divContainer.insertAdjacentElement("beforeend", square);
}

}

function userInput(){
    let userNumber = prompt("Please Enter Number of Squares Per Side! Limits 1-100!");
    if (userNumber === null){
        return;
    } else if(userNumber > 100){
        alert("Error: Please Enter A Number Less Than 100!", "Please Reenter The Number.");
    } else if (userNumber < 1){
        alert("Error: Please Enter A Number Greater Than 0!", "Please Reenter The Number.");
    } else {
        populateContainer(userNumber);
        shakeNumber = userNumber;
    }
}

function squareColor () {
    if (!toggle){
        this.style.backgroundColor = color;
    } else if(toggle){
        let selection = Math.floor(Math.random() * 7);
        color = colors[selection];
        this.style.backgroundColor = color;
    }
}

const toggled = () => {
    toggle = true;
}

function screenShake(){
    color = "black";
    toggle = false;
    let elementShaked = document.getElementById('main-container');
    elementShaked.classList.add('shake');
    setTimeout(() => {
        elementShaked.classList.remove('shake');
    }, 500);
}

const gitRead = () => {
    window.open("https://github.com/Jaime-Sanz/Etch-a-Sketch")
}

const odinRead = () => {
    window.open("https://www.theodinproject.com/lessons/foundations-etch-a-sketch")
}

