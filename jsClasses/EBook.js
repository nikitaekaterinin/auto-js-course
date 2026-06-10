import Book from './Book.js';

class EBook extends Book {
  #fileFormat;

  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }

  set fileFormat(value) {
    const allowedFormats = ['pdf', 'epub', 'mobi', 'fb2', 'txt'];
    const format = String(value).toLowerCase().trim();

    if (!allowedFormats.includes(format)) {
      throw new Error(
        `Формат файлу має бути одним з: ${allowedFormats.join(', ')}`,
      );
    }

    this.#fileFormat = format;
  }

  printInfo() {
    console.log(
      `Електронна книга: "${this.title}", автор: ${this.author}, рік видання: ${this.year}, формат: ${this.fileFormat}`,
    );
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error('Перший аргумент має бути екземпляром класу Book');
    }

    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

export default EBook;
