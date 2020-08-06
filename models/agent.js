// Model definition for agent, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    AgentIdSQL: Number,
    AgtFirstName: String,
    AgtMiddleInitial: String,
    AgtLastName: String,
    AgtBusPhone: String,
    AgtEmail: String,
    AgtPosition: String,
    AgencyIdSQL: Number
  }
);

module.exports = mongoose.model('agent', mySchema);