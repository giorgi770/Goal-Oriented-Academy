const person = {
    name: "Giorgi",
    age: 14,
    city: "Tbilisi"
};

console.log(person);

//დავალება 2
console.log(person.name); // Logs: Giorgi
console.log(person.city); // Logs: Tbilisi

//დავალება 3
const { name, age } = person;
console.log(name); // Logs: Giorgi
console.log(age);  // Logs: 14