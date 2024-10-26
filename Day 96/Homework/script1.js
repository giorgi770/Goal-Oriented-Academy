//დავალება 4
const student = {
    name: "Ellison",
    age: 19,
    address: {
        city: "Los Angeles",
        country: "USA"
    }
};

// Destructure city and country from the address
const { address: { city, country } } = student;
console.log(city);   // Logs: Los Angeles
console.log(country); // Logs: USA