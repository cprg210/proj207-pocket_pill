// Model definition for products_supplier, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    ProductSupplierIdSQL: Number,
    ProductIdSQL: Number,
    SupplierIdSQL: Number
  }
);

module.exports = mongoose.model('products_supplier', mySchema);