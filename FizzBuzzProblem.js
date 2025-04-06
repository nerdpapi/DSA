'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

// Take input from console
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// FizzBuzz function
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {    // Loop from 1 to n
        let output = '';               // Initialize output as empty

        if (i % 3 === 0) output += 'Fizz';  // If divisible by 3, add 'Fizz'
        if (i % 5 === 0) output += 'Buzz';  // If divisible by 5, add 'Buzz'

        console.log(output || i);  // Print output if not empty, else print number
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    fizzBuzz(n);
}
