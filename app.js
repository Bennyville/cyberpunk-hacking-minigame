let codes = ['1C', '55', '7A', 'BD', 'E9'];

let matrix = [];
let puffer;
let daemons;

function genMatrix(lineLength) {
    for(let i = 0; i < lineLength; i++) {
            matrix[i] = [];
        for(let j = 0; j < lineLength; j++) {
            matrix[i].push(codes[Math.floor(Math.random() * codes.length)]);
        }
    }

    return matrix;
}

console.log(genMatrix(5));

