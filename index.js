//default size for the sketch grid.
let size = 16;

//slider represents the range input.
const slider = document.getElementById("size-slider");

slider.addEventListener("change", () => {
    //Update value of size .
    size = slider.value;

    //Call createGrid function to update the grip to new size.
    createGrid(size);

    //functionality to display size in realtime.
    const val = document.querySelector("#size-display");
    val.innerHTML = `${slider.value} x ${slider.value}`;
})

//button to clear the grid without resetting size.
const clear = document.getElementById("clear");

clear.onclick = () => {
    //this works as createGrid() function clears the grid everytime it is called.
    //refer further in createGrid function.
    createGrid(size);
}

//grid is the container that will hold the tiles/divs that will be created.
const grid = document.querySelector(".container");

function createGrid(size) {
    //edge is the dimension of the square tile.
    let edge = 640 / size;

    //this line clears the grid . So, we begin with a clean grid each time.
    // without clearing, the divs end up adding upon previous ones everytime the function is called.
    grid.innerHTML = '';

    //set up the grid
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    
    //div represents a single tile.
    let div;

    for (let i = 0; i < size * size; i++) {
        //insert tiles into grid.
        div = document.createElement("div");
        div.style.minWidth = `${edge}px`;
        div.style.minHeight = `${edge}px`
        grid.appendChild(div);
    }

    //we cannot add eventlistener to div in previous for loop as only the very last div inserted ends up actually getting a listener added.
    //Further research needed as to know why.
    //Hence we use a foreach loop to add listener to each tile(div).
    const tiles = grid.querySelectorAll("div");
    tiles.forEach(element => {
        //we add "draw" to the classlist of hovered tile which sets its bgColor to black
        element.addEventListener("mouseover", () => element.classList.add("draw"));
    });
}

//call the function so grid a 16x16 is created when page loads
//else it will load only when size is changed
createGrid(size);


