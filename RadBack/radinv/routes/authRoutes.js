const express  = require('express');
const bcrypt   = require('bcrypt');
const passport = require('passport');
const ensure   = require('connect-ensure-login');
const jwt      = require('jsonwebtoken');

const User = require('../models/userModel.js');


const authRoutes = express.Router();

authRoutes.post('/api/signup',
ensure.ensureNotLoggedIn('/'),
(req, res, next) => {
  const userEmail = req.body.emailInput;
  const encryptedPassword = req.body.signupPassword;
  // Don't let users submit blank emails or passwords
  if (userEmail == '' || encryptedPassword == '') {
    res.status(400).json({ message: 'Provide username and password.' });
  return;
  }
  // Check password length, characters
  // if (signupPassword.length<=1 || signupPassword.length >=10) {
  //   res.render('auth/signUp.ejs', {
  //     errorMessage: 'Password need to have between 3 and 10 characters.'
  //   });
  //   return;
  // }
  User.findOne(
    { userEmail: userEmail},
    { userEmail: 1 },
    (err, foundUser) => {
      if (err) { 
        res.status(500).json({ message: 'Something went wrong.' });
        return;
      }
    // Don't let the user register if the email is taken
      if (foundUser) {
        res.status(400).json({ message: 'The username already exists.' });
        return;
      }
      
      // We are good to go, time to save the user.
      // Encrypt the password
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(encryptedPassword, salt);
      // Create the user
      const theUser = new User({
        name: req.body.firstNameInput,
        userEmail: emailInput,
        encryptedPassword: hashPass
      });
      // Save it
      theUser.save((err) => {
        if (err) {
          res.status(500).json({ message: 'Something went wrong.' });
          return;
        }
        req.login(theUser, (err) => {
          if (err) {
            res.status(500).json({ message: 'Something went wrong.' });
            return;
          }          
          res.status(200).json(req.user);
        });
      });
    });
});