class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва книги має бути непорожнім рядком');
    }
    this.#title = value.trim();
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Автор має бути непорожнім рядком');
    }
    this.#author = value.trim();
  }

  get year() {
    return this.#year;
  }

  set year(value) {
    const yearNumber = Number(value);
    const currentYear = new Date().getFullYear();

    if (
      !Number.isInteger(yearNumber) ||
      yearNumber < 0 ||
      yearNumber > currentYear
    ) {
      throw new Error(
        `Рік видання має бути цілим числом від 0 до ${currentYear}`,
      );
    }

    this.#year = yearNumber;
  }

  printInfo() {
    console.log(
      `Книга: "${this.title}", автор: ${this.author}, рік видання: ${this.year}`,
    );
  }

  static findOldest(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('Потрібен непорожній масив книг');
    }

    return books.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest,
    );
  }
}

export default Book;
