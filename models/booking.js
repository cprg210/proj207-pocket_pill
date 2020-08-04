const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    BookingIdSQL: Number,
    BookingDate: Date,
    BookingNo: String,
    TravelerCount: Number,
    CustomerIdSQL: Number,
    TripTypeIdSQL: String,
    PackageIdSQL: Number
  }
);

module.exports = mongoose.model('booking', mySchema);