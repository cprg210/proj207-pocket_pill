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
    AgentIdSQL: Number
  }
);

module.exports = mongoose.model('customer', mySchema);