// This js file defines the schema for the mongoDB and export the model at the end of the file.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    AffilitationId: String,
    AffName:        String,
    AffDesc:        String
  }
);

module.exports = mongoose.model('affiliation', mySchema);