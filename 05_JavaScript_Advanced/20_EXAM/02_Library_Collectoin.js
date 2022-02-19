class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        let payed = false;
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.')
        }
        this.books.push(Object.assign({},{ bookName, bookAuthor, payed }));
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        if (!this.books.some(x => x.bookName == bookName)) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        let currentBook = this.books.find(x => x.bookName == bookName);
        if (currentBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        currentBook.payed = true;
        this.books = this.books.filter(x => x.bookName != bookName);
        this.books.push(currentBook);

        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName){
        if (!this.books.some(x => x.bookName == bookName)) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        let currentBook = this.books.find(x => x.bookName == bookName);
        if (!currentBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books = this.books.filter(x => x.bookName != bookName);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor){
        if (!bookAuthor) {
            let result = '';
            result += `The book collection has ${this.capacity - this.books.length} empty spots left.\n`

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).forEach(book => {
                let paidString = '';
            if (book.payed) {
                paidString = 'Has Paid';
            }else{
                paidString = 'Not Paid';  
            }
                result += `${book.bookName} == ${book.bookAuthor} - ${paidString}.\n`
            })
           
            return result.trim();

        }else{
            if (!this.books.some(x => x.bookAuthor == bookAuthor)) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            let currentBook = this.books.find(x => x.bookAuthor == bookAuthor);
            let paidString = '';
            if (currentBook.payed) {
                paidString = 'Has Paid';
            }else{
                paidString = 'Not Paid';  
            }
            return `${currentBook.bookName} == ${currentBook.bookAuthor} - ${paidString}.`
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
