
function printOddSeries(a) {
    let result = [];
    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }
    console.log(result.join(', '));
}


printOddSeries(4); // Output: 1, 3, 5, 7