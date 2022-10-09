

function drawGrid(size){
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
    e.target.style.backgroundColor = "purple";
    }));
}

function getInput(){
    const inputSize = parseInt(window.prompt("Enter length of the square grid side:"));
    drawGrid(inputSize);
}

function resetGrid(){
    
}




