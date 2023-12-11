const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController.js");

router
    .get("/", booksController.getBooks)
    .get("/:id", booksController.getBook)
    .post("/", booksController.addBook)
    .put("/:id", booksController.updateBook)
    .delete("/:id", booksController.deleteBook);

module.exports = router;