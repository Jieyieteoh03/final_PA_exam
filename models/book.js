const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/*
    instruction: setup the book schema according to the following requirements:
    - title: (String, required)
    - author: (ObjectId, ref: 'Author', required)
    - publishedDate: (Date)
    - genre: (String)
    - summary: (String)
*/
const authorSchema = require("./author");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publishedDate: {
    type: Date,
  },
  genre: {
    type: String,
  },
  summary: {
    type: String,
  },
});

const Book = model("Book", bookSchema);
module.exports = Book;
