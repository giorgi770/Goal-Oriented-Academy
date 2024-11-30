// calculate ფუნქცია
function calculate(a, b, operation) {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      default:
        return 'Unknown operation';
    }
  }
  
  // filter ფუნქცია
  function filter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const filteredValue = func(arr[i]);
      result.push(filteredValue);
    }
    return result;
  }
  
  // ექსპორტი calculate და filter ფუნქციები
  module.exports = { calculate, filter };