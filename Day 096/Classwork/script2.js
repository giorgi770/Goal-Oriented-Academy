// Map მეთოდის კლონი
function customMap(array, callback) {
    // ახალი მასივი, სადაც ჩაიწერება შედეგები
    const result = [];
    
    // გადავუვლით მასივს
    for (let i = 0; i < array.length; i++) {
        // გამოვიძახებთ callback ფუნქციას თითოეული ელემენტისთვის და დავამატებთ ახალ მასივში
        result.push(callback(array[i], i, array));
    }
    
    return result; // აბრუნებს ახალ მოდიფიცირებულ მასივს
}

// იგივე ფუნქცია customMap გამოყენებით
const customModifiedNumbers = customMap(numbers, (num, index) => {
    return index % 2 === 0 ? num * 2 : num; // თუ ლუწია ინდექსი, გაამრავლე 2-ზე, თორემ უცვლელი დარჩება
});

console.log(customModifiedNumbers);
// Logs: [2, 2, 6, 4, 10, 6, 14, 8, 18, 10]
