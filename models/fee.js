// Model definition for fee, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    FeeIdSQL: String,
    FeeName: String,
    FeeAmt: mongoose.Decimal128,
    FeeDesc: String
  }
);

module.exports = mongoose.model('fee', mySchema);