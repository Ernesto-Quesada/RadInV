const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const piSchema = new Schema({
    name: { type: String },
    last: { type: String },
    address: { type: String },
    email: { type: String },
    // Traditional registration users
    //username: { type: String },
    //encryptedPassword: { type: String },
  },
  // 2nd arg -> additional options
  {
    // Adds createdAt & updatedAt to documents
    timestamps: true
  }
);
const pInv = mongoose.model('pInv', piSchema);
module.exports = pInv;