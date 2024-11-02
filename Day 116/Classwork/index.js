// იმპორტი utils.js ფაილიდან
const { greet, calculateAverage } = require('./utils');

// greet ფუნქციის გამოყენება
console.log(greet("giorgi")); // Hello, giorgi!

const numbers = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers)); // 30