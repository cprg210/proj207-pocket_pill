// This is the js file to build the MongoDB and import the data from the seed.

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeedAffiliations = require('./seeds/affiliations.js');
const dbSeedAgencies = require('./seeds/agencies.js');
const dbSeedAgents = require('./seeds/agents.js');
const dbSeedBookingDetails = require('./seeds/bookingdetails.js');
const dbSeedBookings = require('./seeds/bookings.js');
const dbSeedClasses = require('./seeds/classes.js');
const dbSeedCreditCards = require('./seeds/creditcards.js');
const dbSeedCustomers = require('./seeds/customers.js');
const dbSeedCustomersRewards = require('./seeds/customers_rewards.js');
const dbSeedEmployees = require('./seeds/employees.js');
const dbSeedFees = require('./seeds/fees.js');
const dbSeedPackages = require('./seeds/packages.js');
const dbSeedPackagesProductsSuppliers = require('./seeds/packages_products_suppliers.js');
const dbSeedProducts = require('./seeds/products.js');
const dbSeedProductsSuppliers = require('./seeds/products_suppliers.js');
const dbSeedRegions = require('./seeds/regions.js');
const dbSeedRewards = require('./seeds/rewards.js');
const dbSeedSupplierContacts = require('./seeds/suppliercontacts.js');
const dbSeedSuppliers = require('./seeds/suppliers.js');
const dbSeedTripTypes = require('./seeds/triptypes.js');

// Define model
const dbModelAffiliation = require('./models/affiliation.js');
const dbModelAgency = require('./models/agency.js');
const dbModelAgent = require('./models/agent.js');
const dbModelBooking = require('./models/booking.js');
const dbModelBookingDetail = require('./models/bookingdetail.js');
const dbModelClass = require('./models/class.js');
const dbModelCreditCard = require('./models/creditcard.js');
const dbModelCustomer = require('./models/customer.js');
const dbModelCustomersReward = require('./models/customers_reward.js');
const dbModelEmployee = require('./models/employee.js');
const dbModelFee = require('./models/fee.js');
const dbModelPackage = require('./models/package.js');
const dbModelPackagesProductsSupplier = require('./models/packages_products_supplier.js');
const dbModelProduct = require('./models/product.js');
const dbModelProductsSupplier = require('./models/products_supplier.js');
const dbModelRegion = require('./models/region.js');
const dbModelReward = require('./models/reward.js');
const dbModelSupplier = require('./models/supplier.js');
const dbModelSupplierContact = require('./models/suppliercontact.js');
const dbModelTripType = require('./models/triptype.js');


/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

const dbURL = process.env.MONGODB_URL;
mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');
  dbModelAffiliation.insertMany(dbSeedAffiliations, function(error, data) {
    console.log('Affiliations Data import completed.');
  });
  dbModelAgency.insertMany(dbSeedAgencies, function(error, data) {
    console.log('Agencies Data import completed.');
  });
  dbModelAgent.insertMany(dbSeedAgents, function(error, data) {
    console.log('Agents Data import completed.');
  });
  dbModelBooking.insertMany(dbSeedBookings, function(error, data) {
    console.log('Bookings Data import completed.');
  });
  dbModelBookingDetail.insertMany(dbSeedBookingDetails, function(error, data) {
    console.log('BookingDetails Data import completed.');
  });
  dbModelClass.insertMany(dbSeedClasses, function(error, data) {
    console.log('Classes Data import completed.');
  });
  dbModelCreditCard.insertMany(dbSeedCreditCards, function(error, data) {
    console.log('CreditCards Data import completed.');
  });
  dbModelCustomer.insertMany(dbSeedCustomers, function(error, data) {
    console.log('Customers Data import completed.');
  });
  dbModelCustomersReward.insertMany(dbSeedCustomersRewards, function(error, data) {
    console.log('CustomersRewards Data import completed.');
  });
  dbModelEmployee.insertMany(dbSeedEmployees, function(error, data) {
    console.log('Employees Data import completed.');
  });
  dbModelFee.insertMany(dbSeedFees, function(error, data) {
    console.log('Fees Data import completed.');
  });
  dbModelPackage.insertMany(dbSeedPackages, function(error, data) {
    console.log('Packages Data import completed.');
  });
  dbModelPackagesProductsSupplier.insertMany(dbSeedPackagesProductsSuppliers, function(error, data) {
    console.log('PackagesProductsSuppliers Data import completed.');
  });
  dbModelProduct.insertMany(dbSeedProducts, function(error, data) {
    console.log('Products Data import completed.');
  });
  dbModelProductsSupplier.insertMany(dbSeedProductsSuppliers, function(error, data) {
    console.log('ProductsSuppliers Data import completed.');
  });
  dbModelRegion.insertMany(dbSeedRegions, function(error, data) {
    console.log('Regions Data import completed.');
  });
  dbModelReward.insertMany(dbSeedRewards, function(error, data) {
    console.log('Rewards Data import completed.');
  });
  dbModelSupplier.insertMany(dbSeedSuppliers, function(error, data) {
    console.log('Suppliers Data import completed.');
  });
  dbModelSupplierContact.insertMany(dbSeedSupplierContacts, function(error, data) {
    console.log('SupplierContacts Data import completed.');
  });
  dbModelTripType.insertMany(dbSeedTripTypes, function(error, data) {
    console.log('TripTypes Data import completed.');
  });
});

