const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    AffiliationIdSQL: String,
    AffName: String,
    AffDesc: String
  }
);

module.exports = mongoose.model('affiliation', mySchema);