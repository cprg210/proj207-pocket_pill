const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    FeeIdSQL: String,
    FeeName: String,
    FeeAmt: Decimal128,
    FeeDesc: String
  }
);

module.exports = mongoose.model('fee', mySchema);