const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Author name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
    maxlength: [100, "Name cannot exceed 100 characters"]
  },
  biography: {
    type: String,
    maxlength: [1000, "Biography cannot exceed 1000 characters"]
  },
  nationality: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Author", authorSchema);