const { Schema, model } = require("mongoose");

const Book = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: String,
    price: Number,
    author: String,
    image: String
});

module.exports = model("Book", Book);