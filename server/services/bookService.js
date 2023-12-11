const Book = require("../models/Book");

const addBook = async ({ title, desc, price, author, image }) => {
    // Check if book already exists
    const isExists = await Book.findOne({ title, author }).exec();
    if (isExists) {
        const error = new Error("Book already exists");
        error.status = 409;
        throw error;
    }

    // add book to database
    const book = new Book({ title, desc, price, author, image });
    await book.save();
    return book;
}

const getBooks = async () => {
    // get books from database
    const books = await Book.find();
    return books;
}

const getBook = async (id) => {
    // get book from database
    const book = await Book.findById(id).exec();
    return book;
}

const updateBook = async (id, book) => {
    // update book in database
    const updatedBook = await Book.findByIdAndUpdate(id, book);
}

const deleteBook = async (id) => {
    // delete book from database
    await Book.findByIdAndDelete(id);
}

module.exports = {
    addBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
}