// დავალება 8
const user = {
    name: "Bubu",
    age: 4
};

const locationInfo = {
    city: "Tbilisi",
    country: "Georgia"
};
const mergedObject = { ...user, ...locationInfo };
console.log(mergedObject); 
// Logs: { name: "Bubu", age: 4, city: "Tbilisi", country: "Georgia" }
