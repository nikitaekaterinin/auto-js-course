import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('Кобзар', 'Тарас Шевченко', 1840);
const book3 = new Book('Майстер і Маргарита', 'Михайло Булгаков', 1967);

console.log('--- Книги ---');
book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook(
  'JavaScript: The Good Parts',
  'Douglas Crockford',
  2008,
  'pdf',
);

console.log('\n--- Електронна книга ---');
ebook1.printInfo();

console.log('\n--- Геттери та сеттери ---');
book1.title = 'Тваринна ферма';
book1.author = 'George Orwell';
book1.year = 1945;
console.log(`Оновлена назва: ${book1.title}`);
console.log(`Оновлений автор: ${book1.author}`);
console.log(`Оновлений рік: ${book1.year}`);

ebook1.fileFormat = 'epub';
console.log(`Оновлений формат ebook: ${ebook1.fileFormat}`);

console.log('\n--- Найдавніша книга ---');
const books = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldest(books);
oldestBook.printInfo();

console.log('\n--- EBook з Book ---');
const ebookFromBook = EBook.fromBook(book2, 'fb2');
ebookFromBook.printInfo();
