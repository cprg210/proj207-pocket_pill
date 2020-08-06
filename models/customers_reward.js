// Model definition for customers_reward, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    CustomerIdSQL: Number,
    RewardIdSQL: Number,
    RwdNumber: String
  }
);

module.exports = mongoose.model('customers_reward', mySchema);