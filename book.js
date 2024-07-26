const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true },
  publishedDate: Date,
  price: Number,
  inStock: Boolean
});

module.exports = mongoose.model('Book', bookSchema);
