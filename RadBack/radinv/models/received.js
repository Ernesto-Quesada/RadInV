const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receivedSchema = new Schema({
  recID: { type: Schema.Types.ObjectId, ref:'isotope'},
  receivedAmount: { type: Number, default: 0},
  dateReceived: { type: Date },
  manufacturer: { type: String },
  currentAmount: { type: Number, default: 0}
},
{
    // Adds createdAt & updatedAt to documents
    timestamps: true
}
);

const received = mongoose.model('Received', receivedSchema);

module.exports = received;