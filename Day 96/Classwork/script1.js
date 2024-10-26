// Reduce მეთოდის კლონი
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0]; // საწყისი მნიშვნელობა
    
    for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    
    return accumulator;
}

// ჯამის გამოთვლა გამოყენებით customReduce
const customSum = customReduce(numbers, (acc, curr) => acc + curr, 0);
console.log('კლონით გამოთვლილი ჯამი:', customSum); // Logs: 15

// ნამრავლი
const customProduct = customReduce(numbers, (acc, curr) => acc * curr, 1);
console.log('კლონით გამოთვლილი ნამრავლი:', customProduct); // Logs: 120
