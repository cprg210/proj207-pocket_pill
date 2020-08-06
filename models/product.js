// Model definition for product, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    ProductIdSQL: Number,
    ProdName: String
  }
);

module.exports = mongoose.model('product', mySchema);