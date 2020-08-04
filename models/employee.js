const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
  {
    EmpFirstName: String,
    EmpMiddleInitial: String,
    EmpLastName: String,
    EmpBusPhone: String,
    EmpEmail: String,
    EmpPosition: String
  }
);

module.exports = mongoose.model('employee', mySchema);