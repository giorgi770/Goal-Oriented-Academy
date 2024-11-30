// calculator.js ფაილიდან ფუნქციების იმპორტი
const { calculate, filter } = require('./calculator');

// calculate ფუნქციის გამოყენება
const calcResult = calculate(10, 5, 'add');
console.log(`Calculation result: ${calcResult}`); // 15

// filter ფუნქციის გამოყენება
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filter(numbers, (num) => num % 2 === 0);
console.log(`Filtered numbers (even): ${evenNumbers}`); // [2, 4, 6]
