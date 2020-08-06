// Model definition for suppliercontact, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    SupplierContactIdSQL: Number,
    SupConFirstName: String,
    SupConLastName: String,
    SupConCompany: String,
    SupConAddress: String,
    SupConCity: String,
    SupConProv: String,
    SupConPostal: String,
    SupConCountry: String,
    SupConBusPhone: String,
    SupConFax: String,
    SupConEmail: String,
    SupConURL: String,
    AffiliationIdSQL: String,
    SupplierIdSQL: Number
  }
);

module.exports = mongoose.model('suppliercontact', mySchema);