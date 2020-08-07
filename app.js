
// import modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const moment = require('moment');
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcryptjs');

// import models
const Packages = require('./models/package.js');
const Customer = require('./models/customer.js');
const Agency = require('./models/agency.js');
const Agent = require('./models/agent.js');

// create express app
const app = express();

// EJS still needs to be installed via NPM
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Hide creds from repo
const mongoDB = process.env.MONGODB_URL;

// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to know its successfully connected
db.once('open', function() {
  console.log('Connected to DB...');
});

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "https://dashboard.heroku.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));


// *****************************************************
// Use session to save data
// *****************************************************
app.use(
  session({
    secret: 'ssshhhhhh',
    resave: true,
    saveUninitialized: true
  })
);

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Define an endpoint handler for the home page 
app.get('/', function(request, response){
  response.render('index',{});
})

// Setup GET endpoint handler for login page.
app.get('/login', function(request, response){
  sess = request.session;
  response.render('login',{xpage_message: sess.message});
})

// Setup GET endpoint handler for register page.
app.get('/register', function(request, response){
  response.render('register',{});
})

// Setup GET endpoint handler for contact us page.
app.get('/contact', function(request, response){
  response.render('contact',{});
})

// Setup GET endpoint handler for destination gallery page.
app.get('/explore', function(request, response){
  response.render('explore',{});
})


app.get('/about', function(request, response){
  response.render('about',{});
})


app.get('/order', function(request, response){
  sess = request.session;
  response.render('order',{xpage_message: sess.userEmail});
})

app.get('/payment', function(request, response){
  response.render('payment',{});
})

app.get('/experience', function(request, response){
  response.render('experience',{});
})

// Define an endpoint handler for the individual destination pages
app.get('/:id', function(request, response){

  // model.findOne returns the first object it finds
  // model.find will always return an array, even if it only finds one 
  Packages.findOne({'PackageIdSQL': request.params.id}, function(error, destination) {
  
    // Check for IDs that are not in our list and render custom 404 page
     if (!destination) {
     return response.render('404-page', {});
    }

    // Compile view and respond
    response.render('destination-single', destination);
  });
})

app.get('/api/images', function(request, response) {
  Packages.find({'PkgEndDate': {$gt: moment()}, 'PkgStartDate': {$lte: moment()}}, function(error, result) {
    response.json(result);
  });
});

app.get('/api/agency', function(request, response) {
  Agency.find(function(error, result) {
    response.json(result);
  });
});

app.get('/api/:agencyID', function(request, response) {
  Agent.find({'AgencyIdSQL': request.params.agencyID}, function(error, result) {
    response.json(result);
  });
});

// Created an api using postmaster (no EJS here) called thisyear which will be fetched.
// this is the endpoint for current year using moment dependency (./public/js/thisyear.js)
app.get('/api/thisyear', function(request, response){
  response.json({year: moment().format("YYYY")});
})

// *****************************************************
// Post handler to save registration data into database
// *****************************************************
app.post('/register', (req, res) => {
  let { username, email, password1, password2, subscription } = req.body;
  // console.log(username, email, password1, password2, subscription);
  if (subscription === 'on') subscription = true;
  else subscription = false;
  let errors = [];
  if (!username || !email || !password1 || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }
  if (password1 != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }
  if (password1.length < 8) {
    errors.push({ msg: 'Password must be at least 8 characters' });
  }
  if (errors.length > 0) {
    res.render('register', {
      errors,
      username,
      email,
      password1,
      password2
    });
  } else {
    Customer.findOne({ CustEmail: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists in database' });
        res.render('register', {
          errors,
          username,
          email,
          password1,
          password2
        });
      } else {
        const newCustomer = new Customer({
          CustFirstName: username,
          CustEmail: email,
          CustPass: password1,
          CustSubscribed: subscription
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newCustomer.CustPass, salt, (err, hash) => {
            if (err) throw err;
            newCustomer.CustPass = hash;
            newCustomer
              .save()
              .then(user => {
                sess = req.session;
                sess.message = 'registrated successfully, please log in';
                res.redirect('login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// *******************************************************
// Post handler to check log in information from database
// *******************************************************
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  let errors = [];
  // Match user
  Customer.findOne({
    CustEmail: email
  }).then(user => {
    if (!user){
      errors.push({ msg: 'The Email is not registrated' });
      res.render('login', {
        errors,
        name: "login"
      });
    }
    // Match password
    else{
      bcrypt.compare(password, user.CustPass, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) {
        errors.push({ msg: 'The password is wrong' });
        res.render('login', {
          errors,
          name: "login"
        });
      } else {
        sess = req.session;
        sess.userEmail = email;
        res.redirect('/order');
        }
      });
    }   
  });
});


// if no file or endpoint found, send custom 404-page as a response to the browser
app.use(function(req, res) {
  res.status(404);
  res.render('404-page', {});
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});