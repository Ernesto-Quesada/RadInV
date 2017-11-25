const express  = require('express');
const bcrypt   = require('bcrypt');
const passport = require('passport');
const ensure   = require('connect-ensure-login');
const jwt      = require('jsonwebtoken');

const User = require('../models/userModel.js');


const authRoutes = express.Router();

authRoutes.post('/api/auth',
//ensure.ensureNotLoggedIn('/'),
(req, res, next) => {
  console.log('register')
})

module.exports = authRoutes;