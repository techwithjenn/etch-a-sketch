var drawingCanvas = document.getElementById('canvas');

function makeRows(rows, cols) {
    drawingCanvas.style.setProperty('--grid-rows', rows);
    drawingCanvas.style.setProperty('--grid-cols', cols);
    for (c =0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        
        cell.addEventListener('mouseover', function() {
            changeColor(cell);
        })
        drawingCanvas.appendChild(cell).className = 'grid-item';
    };
};

function changeColor (cellunit) {
    const blackColor = document.getElementById('black');
    const rainbowColor = document.getElementById('rainbow');
    const grayscaleColor = document.getElementById('grayscale');
    if (blackColor.checked) {
        cellunit.style.backgroundColor = 'black';
    }
    else if (rainbowColor.checked) {
        cellunit.className = 'rainbow';
    }
    else if (grayscaleColor.checked) {
        cellunit.style.backgroundColor = 'gray';
    }
}

makeRows(16,16);





function handleChange1() {
    drawingCanvas.innerHTML = '';
    makeRows(60,60)  
}

function handleChange2() {
    drawingCanvas.innerHTML = '';
    makeRows(35,35)
}


function handleChange3() {
    drawingCanvas.innerHTML = '';
    makeRows(16,16)
}