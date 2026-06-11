const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Library name is required"],
    trim: true
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    trim: true
  },
  booksAvailable: {
    type: Number,
    required: [true, "Number of books is required"],
    min: [0, "Books available cannot be negative"]
  },
  isOpen: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Library", librarySchema);
