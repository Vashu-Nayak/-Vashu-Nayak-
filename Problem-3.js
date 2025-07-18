

function printOddPattern(a) {
    let count = (a % 2 === 0) ? a - 1 : a; 
    let result = [];

    for (let i = 0; i < count; i++) {
        result.push(2 * i + 1);
    }

    console.log(result.join(', '));
}


printOddPattern(4); // Output: 1, 3, 5
printOddPattern(6); // Output: 1, 3, 5, 7, 9