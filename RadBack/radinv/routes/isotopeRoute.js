const express = require('express');
const router = express.Router();
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');

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
            {res.status(200).json(isotopeList)}
        })
    }
);

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
router.get('/api/isotope/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }  
    Isotope.findById(req.params.id, (err, theIsotope) => {
      if (err) {
        res.json(err);
        return;
      }  
      res.json(theIsotope);
    });
  });

  //Isotope Edit
router.post('/api/isotope/:id', (req, res, next) => {
    //                          |
    const isotopeId = req.params.id;
    //ensure.ensureLoggedIn('/login'),    
    const isotopeChanges= {  
        isotopeName:       req.body.isotopeNameInput,
        startingBalance:   req.body.startingBalanceInput,
        qtrReceivedAmount: req.body.qtrReceivedAmountInput,
        qtrDisposedAmount: req.body.qtrDisposedAmountInput,
        currentAmount:     req.body.currentAmountInput,
    }
    Isotope.findByIdAndUpdate(
        // 1st arg -> which document (id of the document)
        isotopeId,
        // 2nd arg -> which changes to save (from the form)
        isotopeChanges,
        // 3rd arg -> CALLBACK!
        (err, theIsotope) => {
            if (err) {
            next(err);
            return;
            }
            res.json(theIsotope)
      }
    );
  }
);




module.exports = router;
