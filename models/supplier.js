// Model definition for supplier, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    SupplierIdSQL: Number,
    SupName: String
  }
);

module.exports = mongoose.model('supplier', mySchema);