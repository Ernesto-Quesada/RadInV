const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receivedSchema = new Schema({
//   recID: { type: Schema.Types.ObjectId, ref:'isotope'},
  receivedIsotopeName:{ type: String },
  receivedAmount: { type: Number, default: 0},
  receivedDate: { type: Date },
  manufacturer: { type: String },
  currentAmount: { type: Number, default: 0},
  piUser: { type: String },
},
{
    // Adds createdAt & updatedAt to documents
    timestamps: true
}
);

const received = mongoose.model('Received', receivedSchema);

module.exports = received;