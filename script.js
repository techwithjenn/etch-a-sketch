var drawingCanvas = document.getElementById('canvas');

function makeRows(rows, cols) {
    drawingCanvas.style.setProperty('--grid-rows', rows);
    drawingCanvas.style.setProperty('--grid-cols', cols);
    for (c =0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        drawingCanvas.appendChild(cell).className = 'grid-item';
    }
}

function changeColor() {
    const blackColor = document.getElementById('black');
    const rainbowColor = document.getElementById('rainbow');
    const grayscaleColor = document.getElementById('grayscale');
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item) => {
        item.count = 0;
        item.addEventListener('mouseenter', (e) => {    
            if (blackColor.checked) {
                e.target.style.backgroundColor = 'black';
            }
            else if (rainbowColor.checked) {
                let color1 = Math.floor(Math.random() * 255)
                let color2 = Math.floor(Math.random() * 255)
                let color3 = Math.floor(Math.random() * 255)
                e.target.style.backgroundColor = 'rgb(' +color1+ ', ' +color2+ ', ' +color3+ ')';
            }    
            else if (grayscaleColor.checked) {
                e.target.style.backgroundColor = 'lightgray';
                e.target.style.opacity =  1-  0.2 * e.target.count;
                e.target.count += 1;
                console.log(e.target.style.opacity)
            }
        })
    })
}
    
function resetBoard() {
    drawingCanvas.innerHTML = '';
    makeRows(16,16);
}

function handleChange1() {
    drawingCanvas.innerHTML = '';
    makeRows(60,60) 
    changeColor() 
}

function handleChange2() {
    drawingCanvas.innerHTML = '';
    makeRows(35,35)
    changeColor()
}

function handleChange3() {
    drawingCanvas.innerHTML = '';
    makeRows(16,16)
    changeColor()
}

makeRows(16,16);
changeColor();