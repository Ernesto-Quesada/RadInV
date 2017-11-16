const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const piSchema = new Schema({
    piName: { type: String },
    piLast: { type: String },
    piAddress: { type: String },
    piEmail: { type: String },
    //usingThisIsotope: [{ type: Schema.Types.ObjectId, ref:'isotope'}],
},
// 2nd arg -> additional options
{
// Adds createdAt & updatedAt to documents
timestamps: true
});
const pInv = mongoose.model('pInv', piSchema);
module.exports = pInv;