const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    minlength: [2, "Title must be at least 2 characters"]
  },
  isbn: {
    type: String,
    required: [true, "ISBN is required"],
    unique: true,
    match: [/^[0-9A-Za-z-]+$/, "Invalid ISBN format"]
  },
  publicationYear: {
    type: Number,
    required: [true, "Publication year is required"],
    min: [1000, "Invalid publication year"],
    max: [new Date().getFullYear(), "Publication year cannot be in the future"]
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "Author ID is required"]
  }
});

module.exports = mongoose.model("Book", bookSchema);