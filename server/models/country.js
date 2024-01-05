const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  code: String,
  name: String,
  language: String,
  continent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Continent',
  },
  flag: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
