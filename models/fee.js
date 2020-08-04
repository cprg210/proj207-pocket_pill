const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    FeeIdSQL: String,
    FeeName: String,
    FeeAmt: Number,
    FeeDesc: String
  }
);

module.exports = mongoose.model('fee', mySchema);