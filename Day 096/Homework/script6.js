function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

// Example usage
console.log(sumNumbers(1, 2, 3, 4, 5)); // Logs: 15
