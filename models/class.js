const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    ClassIdSQL: String,
    ClassName: String,
    ClassDesc: String
  }
);

module.exports = mongoose.model('class', mySchema);