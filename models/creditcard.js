const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    CreditCardIdSQL: Number,
    CCName: String,
    CCNumber: String,
    CCExpiry: Date,
    CustomerIdSQL: Number
  }
);

module.exports = mongoose.model('creditcard', mySchema);