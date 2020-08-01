// This js file defines the schema for the mongoDB and export the model at the end of the file.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    AgencyId:       Number,
    AgncyAddress:   String,
    AgncyCity:      String,
    AgncyProv:      String,
    AgncyPostal:    String,
    AgncyCountry:   String,
    AgncyPhone:     String,
    AgncyFax:       String
  }
);

module.exports = mongoose.model('agency', mySchema);