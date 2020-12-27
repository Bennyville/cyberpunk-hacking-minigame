const MATRIX_SIZE = 5;

let chars = ['1C', '55', '7A', 'BD', 'E9'];

let puffer;

function genMatrix(lineLength) {
    let matrix = [];

    for(let i = 0; i < lineLength; i++) {
        matrix[i] = [];

        for(let j = 0; j < lineLength; j++) {
            matrix[i].push(chars[Math.floor(Math.random() * chars.length)]);
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
            daemon.push(chars[Math.floor(Math.random() * chars.length)]);
        }

        daemons.push(daemon);
    }

    return daemons.reverse();
}

function genDaemonsHtml(daemonsEl, daemons) {
    daemons.forEach((daemon) => {
        let ul = document.createElement('ul');
        ul.classList.add('daemons__sequence');

        daemon.forEach((char) => {
            let li = document.createElement('li');
            li.classList.add('daemons__char');
            li.textContent = char;

            ul.appendChild(li);
        })

        daemonsEl.appendChild(ul);
    })
}

let daemonsElement = document.querySelector('.js-daemons');

genDaemonsHtml(daemonsElement, genDaemons(4));

let matrixElement = document.querySelector('.js-matrix');

matrixElement.appendChild(genMatrixHtml(genMatrix(MATRIX_SIZE)));

