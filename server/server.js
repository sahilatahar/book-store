const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConfig.js");
const booksRouter = require("./routes/books.js");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

connectDB();

app.use("/books", booksRouter);

mongoose.connection.once("open", () => {
    app.listen(PORT);
});