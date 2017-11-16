const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//---import de photoReview Schema model
//const photoReview=(require('./photoReview.js'));


const isotopeSchema = new Schema({
  isotopeName: { type: String , required: [true, 'Please enter an isotope'] },
  authorizedLimit: { type: Number, default: 0},
  startingBalance: { type: Number, default: 0},
  qtrReceivedAmount: { type: Number, default: 0},
  qtrDisposedAmount: { type: Number, default: 0},
  currentAmount: { type: Number, default: 0},
  //reference to the user, PI, etc
  userWithThisIsotope: { type: Schema.Types.ObjectId, ref:'pInv'},

});

const isotope = mongoose.model('Isotope', isotopeSchema);


module.exports = isotope;