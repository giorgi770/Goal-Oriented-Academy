//დავალება 1
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const user1 = new User("Gio", "gio@example.com");
const user2 = new User("Mariami", "mariami@example.com");

//დავალება 2
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    displayInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

const user1 = new User("Gio", "gio@example.com");
user1.displayInfo();

//დავალება 3
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    static compareUsers(user1, user2) {
        return user1.email === user2.email;
    }
}

const user1 = new User("Gio", "gio@example.com");
const user2 = new User("Mariami", "mariami@example.com");
console.log(User.compareUsers(user1, user2));

//დავალება 4
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value > 0) {
            this._price = value;
        } else {
            console.log("Price must be positive!");
        }
    }
}

const product = new Product("Laptop", 1000);
product.price = -500;

//დავალელბა 5
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }
}

const student = new Student("Lizi", 20, "S123");

//დავალება 6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    getDetails() {
        return `${super.getDetails()}, Student ID: ${this.studentID}`;
    }
}

const student = new Student("Lizi", 20, "S123");
console.log(student.getDetails());

//დავალება 7
class BankAccount {
    constructor(balance) {
        let _balance = balance;

        this.deposit = function(amount) {
            _balance += amount;
        };

        this.withdraw = function(amount) {
            if (amount <= _balance) {
                _balance -= amount;
            } else {
                console.log("Insufficient funds!");
            }
        };

        this.getBalance = function() {
            return _balance;
        };
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(account.getBalance());

//დავალება 8
class Appliance {
    constructor(power) {
        this._power = power;
    }
}

class WashingMachine extends Appliance {
    constructor(power, model) {
        super(power);
        this.model = model;
    }

    getPower() {
        return this._power;
    }
}

const washer = new WashingMachine(2000, "LG123");
console.log(washer.getPower());

//დავალება 9
class Counter {
    static count = 0;

    static increment() {
        Counter.count++;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.count);

//დავალება 10
class Book {
    constructor(title) {
        this.title = title;
    }
}

const books = [new Book("Book1"), new Book("Book2"), new Book("Book3")];
books.forEach(book => console.log(book.title));

//დავალება 11
const cities = new Map([
    ["Tbilisi", 1000000],
    ["Kutaisi", 150000],
    ["Batumi", 200000]
]);

//დავალება 12
const currencies = new Map([
    ["USD", "Dollar"],
    ["EUR", "Euro"],
    ["GEL", "Lari"]
]);

for (let [code, name] of currencies) {
    console.log(`${code}: ${name}`);
}

//დავალება 13
const prices = new Map([
    ["Apple", 2],
    ["Banana", 1]
]);

const quantities = new Map([
    ["Apple", 5],
    ["Banana", 10]
]);

const totalPrices = new Map();
prices.forEach((price, product) => {
    totalPrices.set(product, price * quantities.get(product));
});

console.log(totalPrices);

//დავალება 14
const countries = new Map([
    ["Georgia", "Tbilisi"],
    ["USA", "Washington D.C."]
]);

const clonedCountries = new Map(countries);

//დავალება 15
const games = new Map([
    ["Game1", 5],
    ["Game2", 4]
]);

console.log(games.size);

//დავალება 16
const products = new Map([
    ["Product1", 10],
    ["Product2", 20]
]);

products.forEach((value, key) => {
    products.delete(key);
    console.log(`${key} deleted`);
});

//დავალება 17
const sports = new Map([
    ["Football", 11],
    ["Basketball", 5]
]);

const sportsArray = Array.from(sports);
console.log(sportsArray);

//დავალება 18
const animals = new Map([
    ["Lion", "Savannah"],
    ["Penguin", "Antarctica"]
]);

for (let [animal, habitat] of animals) {
    if (habitat === "Savannah") {
        console.log(animal);
    }
}

//დავალება 19
const students = new Map([
    ["Gio", 80],
    ["Mariami", 90]
]);

const avgScore = Array.from(students.values()).reduce((acc, score, _, arr) => acc + score / arr.length, 0);
console.log(avgScore);

//დავალება 20
class Library {
    constructor() {
        this.books = new Map();
    }

    addBook(title, author) {
        this.books.set(title, author);
    }
}

const library = new Library();
library.addBook("Book1", "Author1");

//დავალება 21
class Store {
    constructor() {
        this.products = new Map();
    }

    getPrice(product) {
        return this.products.get(product);
    }
}

const store = new Store();
store.products.set("Apple", 2);
console.log(store.getPrice("Apple"));

//დავალება 22
class PhoneBook {
    constructor() {
        this.contacts = new Map();
    }

    addContact(name, phone) {
        this.contacts.set(phone, name);
    }

    getContact(phone) {
        return this.contacts.get(phone);
    }
}

const phoneBook = new PhoneBook();
phoneBook.addContact("Gio", "123456");
console.log(phoneBook.getContact("123456"));

//დავალება 23
class PhoneBook {
    constructor() {
        this.contacts = new Map();
    }

    addContact(name, phone) {
        this.contacts.set(phone, name);
    }

    getContact(phone) {
        return this.contacts.get(phone);
    }
}

const phoneBook = new PhoneBook();
phoneBook.addContact("Gio", "123456");
console.log(phoneBook.getContact("123456"));

//დავალება 24
class Zoo {
    constructor() {
        this.animals = new Map();
    }

    listAnimals() {
        return Array.from(this.animals.keys());
    }
}

const zoo = new Zoo();
zoo.animals.set("Lion", 3);
console.log(zoo.listAnimals());

//დავალება 25
class Inventory {
    constructor() {
        this.items = new Map();
    }
}

class StoreInventory extends Inventory {
    getStock(item) {
        return this.items.get(item);