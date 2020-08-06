// Model definition for triptype, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    TripTypeIdSQL: String,
    TTName: String
  }
);

module.exports = mongoose.model('triptype', mySchema);