const MATRIX_SIZE = 5;

let codes = ['1C', '55', '7A', 'BD', 'E9'];

let puffer;

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

function genDaemons(count) {
    let daemons = [];

    let seqLengthMin = 2;
    let seqLengthMax = count;

    for(let i = count; i > 0; i--) {
        let seqLengthCurrent = 2;

        if(i === seqLengthMax) {
            seqLengthCurrent = seqLengthMax;
        } else if(i < seqLengthMax && i >= seqLengthMin) {
            seqLengthCurrent = Math.round(Math.random() * (seqLengthMax - seqLengthMin) + seqLengthMin);
        }

        let prevDaemon = daemons[count - i - 1] || false;

        if(prevDaemon && seqLengthCurrent > prevDaemon.length) {
            seqLengthCurrent = prevDaemon.length;
        }

        let daemon = [];

        for(let j = 0; j < seqLengthCurrent; j++) {
            daemon.push(codes[Math.floor(Math.random() * codes.length)]);
        }

        daemons.push(daemon);
    }

    return daemons.reverse();
}

let matrixElement = document.querySelector('.js-matrix');

matrixElement.appendChild(genMatrixHtml(genMatrix(MATRIX_SIZE)));

