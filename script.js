GRID_ROWS = 16
GRID_COLUMNS = 16

function createGrid() {
    // Finds and stores the div with class container 
    let container = document.querySelector("div.container");

    // Creates width * length number of "grids" in the div with the given class of container
    for(let i = 0; i < GRID_ROWS; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j < GRID_COLUMNS; j++) {
            let block = document.createElement("div");
            block.classList.add("block");
            row.appendChild(block);
        }
    }  
}

function deleteGrid() {
    let blocks = document.querySelectorAll("div.block");
    let rows = document.querySelectorAll("div.row");
    blocks.forEach(block => {
        block.remove();
    })
    rows.forEach(row => {
        row.remove();
    })
}

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
})

document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("hover")) {
        console.log(event.target.style);
    }
    else {
        if (event.target.classList.contains("block")) {
            event.target.classList.add("hover");
        }
    }
})

function newGrid() {
    newDimensions = parseInt(prompt("Please enter the number of squares you would like per side in your new grid: "));
    if (isNaN(newDimensions)) {
        alert("Please enter only an integer when prompted.");
        return;
    }
    if (newDimensions < 1 || newDimensions > 100) {
        alert("Please enter an integer between 1 to 100.");
        return;
    }
    GRID_ROWS = newDimensions;
    GRID_COLUMNS = newDimensions;
    deleteGrid();
    createGrid();
}