// Model definition for packages_products_supplier, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    PackageIdSQL: Number,
    ProductSupplierIdSQL: Number
  }
);

module.exports = mongoose.model('packages_products_supplier', mySchema);