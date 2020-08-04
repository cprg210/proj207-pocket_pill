const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    ProductSupplierIdSQL: Number,
    ProductIdSQL: Number,
    SupplierIdSQL: Number
  }
);

module.exports = mongoose.model('products_supplier', mySchema);