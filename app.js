let codes = ['1C', '55', '7A', 'BD', 'E9'];

let puffer;
let daemons;

function genMatrix(lineLength) {
    let matrix = [];

    for(let i = 0; i < lineLength; i++) {
        matrix[i] = [];

        for(let j = 0; j < lineLength; j++) {
            matrix[i].push(codes[Math.floor(Math.random() * codes.length)]);
        }
    }

    return matrix;
}

function genMatrixHtml(matrix) {
    let tbody = document.createElement('tbody');

    matrix.forEach((row) => {
        let tr = document.createElement('tr');
        tr.classList.add('matrix__row');

        row.forEach((cell) => {
            let td = document.createElement('td');
            td.classList.add('matrix__cell')

            let button = document.createElement('button');
            button.textContent = cell;

            td.appendChild(button);
            tr.appendChild(td);
        })

        tbody.appendChild(tr);
    })

    return tbody;
}

let matrixElement = document.querySelector('.js-matrix');


matrixElement.appendChild(genMatrixHtml(genMatrix(5)));

