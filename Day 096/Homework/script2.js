// დავალება 5
const product = {
    name: "Asus rog strix g17",
    price: 7000
};

const { name: productName, category = "general" } = product;
console.log(productName); // Logs: Asus rog strix g17
console.log(category);    // Logs: general