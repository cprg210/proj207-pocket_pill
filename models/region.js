// Model definition for region, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    RegionIdSQL: String,
    RegionName: String
  }
);

module.exports = mongoose.model('region', mySchema);