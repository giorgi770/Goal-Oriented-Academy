//დავალება 1
const strings = ["strawberry", "banana", "watermelon", "blueberry", "apple", "grape"];
const map = new Map();
strings.forEach(str => {
    map.set(str, str.length);
});
const uniqueLengths = new Set(map.values());
const sum = Array.from(uniqueLengths).reduce((acc, length) => acc + length, 0);

console.log("Map:", map);
console.log("Sum of unique lengths:", sum);

//დავალება 2
const objects = [
    { id: 1, name: "Luka" },
    { id: 2, name: "Nika" },
    { id: 3, name: "Gio" },
    { id: 4, name: "David" }
];
const mapById = new Map();
objects.forEach(obj => {
    mapById.set(obj.id, obj);
});

console.log(mapById);

const idToFind = 2;
const foundObject = mapById.get(idToFind);

console.log("Object with id 2:", foundObject);

//დავალება 3
const nameAgeMap = new Map();
nameAgeMap.set("Lizi", 25);
nameAgeMap.set("Goga", 30);
nameAgeMap.set("Lado", 22);

function isNameInMap(name) {
    return nameAgeMap.has(name);
}

const nameToCheck = "Goga";
if (isNameInMap(nameToCheck)) {
    console.log(`${nameToCheck} is in the Map.`);
} else {
    console.log(`${nameToCheck} is not in the Map.`);
}

const anotherNameToCheck = "David";
if (isNameInMap(anotherNameToCheck)) {
    console.log(`${anotherNameToCheck} is in the Map.`);
} else {
    console.log(`${anotherNameToCheck} is not in the Map.`);
}

//დავალება 4
// Map ობიექტი პროდუქტების ფასებისთვის
const productPrices = new Map([
    ["watermelone", 1.0],
    ["banana", 0.5],
    ["orange", 0.8]
  ]);
  
  // ფუნქცია, რომელიც გაზრდის პროდუქტის ფასს 10%-ით
  function increasePrice(product) {
    if (productPrices.has(product)) {
      let currentPrice = productPrices.get(product);
      let newPrice = currentPrice * 1.1; // ფასის გაზრდა 10%-ით
      productPrices.set(product, newPrice);
      console.log(`${product} new price: $${newPrice.toFixed(2)}`);
    } else {
      console.log(`${product} not found in the product list.`);
    }
  }
  
  increasePrice("watermelone"); // ვაშლის განახლებული ფასი: $1.10
  increasePrice("banana"); // ბანანის განახლებული ფასი: $0.55
  increasePrice("grape");  // ყურძენი არ მოიძებნა ლისსტში ამიტომ დაიგნორდება.

//დაავლელბა 5
// Map ობიექტი რიცხვითი key-value წყვილებით
const numberMap = new Map([
    [1, 10],
    [2, 15],
    [3, 20],
    [4, 25],
    [5, 30]
  ]);
  
  // ფუნქცია, რომელიც აბრუნებს მხოლოდ ლუწი მნიშვნელობის წყვილებს.
  function filterEvenValues(map) {
    const evenMap = new Map();
    map.forEach((value, key) => {
      if (value % 2 === 0) {
        evenMap.set(key, value);
      }
    });
    return evenMap;
  }
  
  const evenValuesMap = filterEvenValues(numberMap);
  console.log(evenValuesMap); // მხოლოდ ლუწი მნიშვნელობების მქონე წყვილები.
  