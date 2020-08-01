// This js file defines the schema for the mongoDB and export the model at the end of the file.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    id:             Number,
    name:           String,
    fileName:       String,
    altInfo:        String,
    introText:      String,
    exURL:          String
  }
);

module.exports = mongoose.model('collection', mySchema);