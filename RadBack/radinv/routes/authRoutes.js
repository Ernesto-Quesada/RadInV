const express  = require('express');
const bcrypt   = require('bcrypt');
const passport = require('passport');
const ensure   = require('connect-ensure-login');
const jwt      = require('jsonwebtoken');
const checkJwt = require( 'express-jwt');
// req user model
const User = require('../models/userModel.js');

const authRoutes = express.Router();

// sign up or authentication route
authRoutes.post('/api/auth',
  //ensure.ensureNotLoggedIn('/'),
  (req, res, next) => {
    console.log(req.body)
    const user = req.body;
    if (user.firstName === '' || user.lastName === '' || user.password==='') {
      res.status(400).json({ message: 'Provide username and password.' });
    return;
    }
    User.findOne(
      { userEmail: user.email },
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
        const hashPass = bcrypt.hashSync(user.password, salt);
        // Create the user
        const theUser = new User({
          firstName: user.firstName,
          lastName: user.lastName,
          userEmail: user.email,
          encryptedPassword: hashPass
        });
        // Save it
        theUser.save((err) => {
          if (err) {
            res.status(500).json({ message: 'Something went wrong.' });
            return;
          }
          res.status(200).json(req.user);
        });
      });

})

authRoutes.post('/api/login', (req, res, next) =>{
  const user = req.body;
  console.log('REQ_DOT_BODY_____>',req.body)
  User.findOne(
    { userEmail: user.email }, (err, foundUser) => {
        if (err) { 
          res.status(500).json({ message: 'Something went wrong.' });
          return;
        }
        if ( !foundUser){
          return res.status(404).json({error: 'user not found'})
        }
        if (!bcrypt.compareSync(user.password, foundUser.encryptedPassword )) {
          return res.status(401).json({error: 'Wrong password' });
        } 
        // ==== payload needed to sign the token
        const paylod = {
          id: foundUser._id,
          role: foundUser.role
        };
        console.log(foundUser._id)
      const token = jwt.sign(paylod, process.env.JWT_SECRET, {expiresIn: 600 });
      
      return res.status(200).json({ message: 'success auth',
                                    token:token
                                  })
    });

})

module.exports = authRoutes;