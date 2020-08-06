// Model definition for package, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    PackageIdSQL: Number,
    PkgName: String,
    PkgStartDate: Date,
    PkgEndDate: Date,
    PkgDesc: String,
    PkgFileName: String,
    PkgBasePrice: mongoose.Decimal128,
    PkgAgencyCommission: mongoose.Decimal128
  }
);

module.exports = mongoose.model('package', mySchema);