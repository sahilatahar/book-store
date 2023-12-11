const bookService = require('../services/bookService.js');

const getBooks = async (req, res) => {
    try {
        const books = await bookService.getBooks();
        return res.json(books);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getBook = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing book id." });

    try {
        const book = await bookService.getBook(id);
        return res.json(book);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const addBook = async (req, res) => {
    const { title, desc, price, author, image } = req.body;

    if (!title || !desc || !price || !author || !image) return res.status(400).json({ error: "Missing required information." });

    try {
        const book = await bookService.addBook(req.body);
        return res.status(201).json(book);
    } catch (error) {
        if (error.status === 409) {
            return res.status(409).json({ error: error.message });
        }
        return res.status(500).json({ error: error.message });
    }
}

const updateBook = async (req, res) => {

    const { title, desc, price, author, image } = req.body;
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Missing book id." });

    if (!title || !desc || !price || !author || !image) return res.status(400).json({ error: "Missing required information." });

    try {
        const book = await bookService.updateBook(req.params.id, req.body);
        return res.json(book);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteBook = async (req, res) => {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Missing book id." });

    try {
        await bookService.deleteBook(req.params.id);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}