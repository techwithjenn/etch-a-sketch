const drawingCanvas = document.getElementById('canvas');


const dimensions = 16;

for (i=0; i < dimensions; i++) {
    for (j = 0; j < dimensions; j++) {
        const canvasUnit = document.createElement('div');
        canvasUnit.classList.add('unit');
        canvasUnit.textContent = ' '
        drawingCanvas.append(canvasUnit);
}}
