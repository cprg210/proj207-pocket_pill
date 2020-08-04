const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    PackageIdSQL: Number,
    PkgName: String,
    PkgStartDate: Date,
    PkgEndDate: Date,
    PkgDesc: String,
    PkgFileName: String,
    PkgBasePrice: Number,
    PkgAgencyCommission: Number
  }
);

module.exports = mongoose.model('package', mySchema);