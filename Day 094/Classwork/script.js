// const form = document.querySelector('form');
// const ul = document.getElementById('items');

// let index = 0;

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const item = form.item.value;
//     ul.innerHTML += `<li id=${index}>${item}</li>`;
//     index++;

//     form.item.value = '';

// })

// ul.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// })


//დავალება 1
const carnames = ['Bmw', 'Mercedes', 'Porche'];
carnames.forEach(function(car) {
  console.log(car);
});

//დავალება 2


//დავალება 3

// თავდაპირველი მასივი 5 ობიექტით
const people = [
    { name: 'joni', age: 20 },
    { name: 'david', age: 17 },
    { name: 'nikolozi', age: 22 },
    { name: 'antimozi', age: 16 },
    { name: 'mose', age: 18 }
];

// ფილტრაცია: >= 18
const adults = people.filter(person => person.age >= 18);
console.log(adults); 

// ფილტრაცია: < 18
const minors = people.filter(person => person.age < 18);
console.log(minors);