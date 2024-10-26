const products = [{ name: 'asus rog strix', price: 6000 }, { name: 'Laptop', price: 7000 }];
const affordableProducts = products.filter(product => product.price < 8000);
console.log(affordableProducts); //ახსნა:ეს ფუნქცია დააბრუნებს იმ პროდუქტებს, რომელთა ფასი 8000-ზე ნაკლებია. ჩვენს შემთხვევაში, ორივე პროდუქტი აკმაყოფილებს პირობებს.
