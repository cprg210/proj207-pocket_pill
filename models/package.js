const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    PackageIdSQL: Number,
    PkgName: String,
    PkgStartDate: Date,
    PkgEndDate: Date,
    PkgDesc: String,
    PkgBasePrice: Decimal128,
    PkgAgencyCommission: Decimal128
  }
);

module.exports = mongoose.model('package', mySchema);