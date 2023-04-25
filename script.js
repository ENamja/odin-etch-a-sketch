const GRID_ROWS = 16
const GRID_COLUMNS = 16

document.addEventListener("DOMContentLoaded", () => {

    // Finds and stores the div with class container 
    let container = document.querySelector("div.container")

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
})

document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("hover")) {
        console.log(event.target.style);
    }
    else {
        event.target.classList.add("hover");
    }
})