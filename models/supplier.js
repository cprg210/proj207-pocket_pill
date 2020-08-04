const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    SupplierIdSQL: Number,
    SupName: String
  }
);

module.exports = mongoose.model('supplier', mySchema);