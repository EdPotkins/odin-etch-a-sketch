function makeGrid(size){
    const container = document.querySelector(".container");
    container.style.cssText = `
    grid-template-columns: repeat(${size}, 1fr);
     grid-template-rows: repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", (e) => {
    square.style.backgroundColor = "purple";
    }));
}

function getInput(){
    deleteGrid();
    const inputSize = parseInt(window.prompt("Enter length of the square grid side:"));
    if (inputSize > 100) {
        return window.alert("Grid too big! Enter a number below 100!");
    } else makeGrid(inputSize);
}

function deleteGrid(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}

let defaultSize = 16;
makeGrid(defaultSize);




