// დავალება 7
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    publisher: "Scribner"
};
const { year, publisher, ...bookDetails } = book;
console.log(bookDetails); // Logs: { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
