const mongoose = require('mongoose');

const continentSchema = new mongoose.Schema({
  name: String,
});

const Continent = mongoose.model('Continent', continentSchema);

module.exports = Continent;
