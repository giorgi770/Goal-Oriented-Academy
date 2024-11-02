// greet ფუნქცია, რომელიც მომხმარებელს ესალმება
function greet(name) {
    return `Hello, ${name}!`;
}

// calculateAverage ფუნქცია, რომელიც ითვლის საშუალო არითმეტიკულს
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// ექსპორტი ფუნქციების CommonJS-ის დახმარებით
module.exports = { greet, calculateAverage };
