const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    AgencyIdSQL: Number,
    AgncyAddress: String,
    AgncyCity: String,
    AgncyProv: String,
    AgncyPostal: String,
    AgncyCountry: String,
    AgncyPhone: String,
    AgncyFax: String
  }
);

module.exports = mongoose.model('agency', mySchema);