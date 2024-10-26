const books = [{ title: '1984', author: 'Orwell' }, { title: 'Dune', author: 'Herbert' }];
const bookDescriptions = books.map(book => `${book.title} by ${book.author}`);
console.log(bookDescriptions);
