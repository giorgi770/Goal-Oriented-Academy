//task1
const numbers = [1, 2, 3, 4, 5];  ს

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// გამოყენება:
const mySum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log("My Sum:", mySum); // Output: 15

const myProduct = numbers.myReduce((acc, curr) => acc * curr, 1);
console.log("My Product:", myProduct); // Output: 120