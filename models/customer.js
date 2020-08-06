// Model definition for customer, based on the client's old database.
// CustPass was added below to store hash-ed customer's password.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    CustomerIdSQL: Number,
    CustFirstName: String,
    CustLastName: String,
    CustAddress: String,
    CustCity: String,
    CustProv: String,
    CustPostal: String,
    CustCountry: String,
    CustHomePhone: String,
    CustBusPhone: String,
    CustEmail: String,
    CustPass: String,
    CustSubscribed: Boolean,
    AgentIdSQL: Number
  }
);

module.exports = mongoose.model('customer', mySchema);