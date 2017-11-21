const express = require('express');
const router = express.Router();
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');
const passport = require('passport');

    // require the Isotope model here
const Isotope = require('../models/isotopeModel.js');
    //requires the User model because there is a query in one 
    //route that will use the User model
const User = require('../models/userModel.js');

    //=========================================================
    // ===   Render a LIST OF ALL ISOTOPES associated with PI
    //=========================================================
router.get('/api/isotopes',
    //ensure.ensureLoggedIn('/login'),
    //<!--userWithThisIsotope:req.user._id-->
    (req, res, next) => {
        Isotope.find({}, 
        (err, isotopeList) => {
            if (err) {
                res.status(500).json({ message: 'Sooomething went wrong.' });
                return;
            }
            //console.log('thelist',isotopeList);
            {res.status(200).json(isotopeList)}
        })
    }
);

// Add new isotope
router.get('/api/isotopes/new', (req, res, next) => {

  res.render('isotopes/newIsotope.ejs', {
      
    });
});

// Creating Isotope
router.post('/isotope', 
    //ensure.ensureLoggedIn('/login'),
    (req, res, next) => {
        const isotopeName = req.body.isotopeName;
        const currentAmount = req.body.currentAmount;
        const userWithThisIsotope = req.user._id 
        console.log('name of Isotope',isotopeName);
        console.log('current amount',currentAmount);
        console.log('User',req.user._id);
        
        // Create the Isotope
        const theIsotope = new Isotope({
            isotopeName: isotopeName,
            currentAmount: currentAmount,
            userWithThisIsotope: userWithThisIsotope,
        });
        // Save it
        theIsotope.save((err) => {
            if (err) {
                res.status(500).json({ message: 'Sooomething went wrong.' });
                return;
            }
            res.status(200).json(theIsotope)
        });
    }
);
module.exports = router;
