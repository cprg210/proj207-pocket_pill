const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    RewardIdSQL: Number,
    RwdName: String,
    RwdDesc: String
  }
);

module.exports = mongoose.model('reward', mySchema);