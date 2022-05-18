const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  products: [
    {
      product: mongoose.Schema.Types.ObjectId,
    },
  ],
  isApproved: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateFilled: {
    type: Date,
  },
});

module.exports = Request = mongoose.model('request', RequestSchema);