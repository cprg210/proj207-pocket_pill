const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    BookingDetailIdSQL: Number,
    ItineraryNo: Number,
    TripStart: Date,
    TripEnd: Date,
    Description: String,
    Destination: String,
    BasePrice: Decimal128,
    AgencyCommission: Decimal128,
    BookingIdSQL: Number,
    RegionIdSQL: String,
    ClassIdSQL: String,
    FeeIdSQL: String,
    ProductSupplierIdSQL: Number
  }
);

module.exports = mongoose.model('bookingdetail', mySchema);