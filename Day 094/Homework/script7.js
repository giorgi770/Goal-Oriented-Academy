const numbers = [45, 55, 77, 100];
const processedNumbers = numbers
  .filter(num => num > 50)
  .map(num => num / 2);
console.log(processedNumbers); 