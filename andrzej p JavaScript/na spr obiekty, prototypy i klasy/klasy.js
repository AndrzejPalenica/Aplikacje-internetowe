class LibraryItem {
    #title;
    #author;
    #year;
    #price;
    constructor(title, author, year, price) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#price = price;
        // this.#price = price;
    }
    setTitle(title) {
        this.#title = title;
    }
    setAuthor(author) {
        this.#author = author;
    }
    setYear(year) {
        this.#year = year;
    }
    setPrice(price) {
        this.#price = price;
    }
    getTitle() {
        return this.#title;
    }
    getAuthor() {
        return this.#author;
    }
    getYear() {
        return this.#year;
    }
    getPrice() {
        return this.#price;
    }
}

class Book extends LibraryItem {
    constructor(title, author, year, price, genere, pages = 0, volumes = 1) {
        super(title, author, year, price);
        this.genere = genere;
        this.pages = pages;
        this.volumes = volumes;
    }
    setGenere(genere) {
        this.genere = genere;
    }
    setPages(pages) {
        this.pages = pages;
    }
    setVolumes(volumes) {
        this.volumes = volumes;
    }
    getGenere() {
        return this.genere;
    }
    getPages() {
        return this.pages;
    }
    getVolumes() {
        return this.volumes;
    }
}

const libItem1 = new Book('Wiesiu', 'Andrzej Sapkowski', 1993, 23.5, 'Fantasy', 254, 1);
const libItem2 = new Book('Cokolwiek', 'Ktokolwiek Anonim', 1478, 154, 'Dziwna', 997/* , 1 */);
console.log(libItem1.getPrice());
libItem1.setPrice(42);
console.log(libItem1.getPrice());
console.log(libItem2.getPrice());
libItem2.setTitle('ABC');
console.log(libItem1.getTitle());