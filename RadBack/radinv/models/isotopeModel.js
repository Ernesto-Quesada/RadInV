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
  //author:{ type: String},
  //description:{ type: String },
  //imageUrl: { type: String },

  //reference to the user
  principalInvestigator: { type: Schema.Types.ObjectId },
  role: { type: String,
    enum: [ 'guest', 'admin' ],
    default: 'guest'
    },
  //---reviews as subdocument of photos //
  


});

const Photo = mongoose.model('Photo', isotopeSchema);


module.exports = Photo;