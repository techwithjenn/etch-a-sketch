var drawingCanvas = document.getElementById('canvas');

var dimensions = 16;

function changeColor (target) {
    target.style.backgroundColor = 'black'
}



// container.addEventListener("mouseover", function (e) {
//     target = e.target;

//     if (target.matches("div.cell")) {
//         changeColor(target);
//     }
// });


function drawBoard() {
    for (i=0; i < dimensions; i++) {
        for (j = 0; j < dimensions; j++) {
            var canvasUnit = document.createElement('div');
            canvasUnit.classList.add('unit');
            drawingCanvas.append(canvasUnit);
            

        }
    }       
}

drawBoard();


drawingCanvas.addEventListener('mouseover', function(e) {
    target = e.target;
    if (target.matches('div.unit')) {
        changeColor(target);
    }
})


// for (i=0; i < dimensions; i++) {
//     for (j = 0; j < dimensions; j++) {
//         var canvasUnit = drawingCanvas.createElement('div');
//         canvasUnit.classList.add('unit');
//         drawingCanvas.append(canvasUnit);
//         canvasUnit.addEventListener('mouseover', Etch());
            
        // var gridUnits = drawingCanvas.querySelectorAll('unit');
        // gridUnits.forEach(gridUnit => gridUnit.addEventListener('mouseover', () => Etch(gridUnit)))

//     }
// }        




// Adjust size of blocks for other grid sizes
// Fix mouseover issue


// document.querySelectorAll('.unit').addEventListener('mouseover', event => {
//     document.querySelectorAll('.unit').classList.add('drawn');})


  




// --------------------

function handleChange1() {
    drawingCanvas.innerHTML = '';
    dimensions = 100;    
    drawBoard(dimensions);
    console.log('it changed 100')


    console.log(drawingCanvas.getElementsByTagName('div').length);

}

function handleChange2() {
    drawingCanvas.innerHTML = '';

    dimensions = 50;

    drawBoard(dimensions);
    console.log('it changed 50')
    console.log(drawingCanvas.getElementsByTagName('div').length);

}


function handleChange3() {
    drawingCanvas.innerHTML = '';
    dimensions = 16;
    drawBoard(dimensions);
    console.log('it changed 16');
}