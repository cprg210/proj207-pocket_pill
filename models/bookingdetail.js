// Model definition for bookingdetail, based on the client's old database.

const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    BookingDetailIdSQL: Number,
    ItineraryNo: Number,
    TripStart: Date,
    TripEnd: Date,
    Description: String,
    Destination: String,
    BasePrice: mongoose.Decimal128,
    AgencyCommission: mongoose.Decimal128,
    BookingIdSQL: Number,
    RegionIdSQL: String,
    ClassIdSQL: String,
    FeeIdSQL: String,
    ProductSupplierIdSQL: Number
  }
);

module.exports = mongoose.model('bookingdetail', mySchema);