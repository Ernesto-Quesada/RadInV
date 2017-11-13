const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    // All users
    name: { type: String },
    certificateDAte:{type: Date},
    certificateExpired:{type: Boolean},
    role: { type: String,
            enum: [ 'guest', 'admin', 'labStaff' ],
            default: 'guest'
            },
    // Traditional registration users
    username: { type: String },
    encryptedPassword: { type: String },
  },
  // 2nd arg -> additional options
  {
    // Adds createdAt & updatedAt to documents
    timestamps: true
  }
);
const User = mongoose.model('User', userSchema);
module.exports = User;