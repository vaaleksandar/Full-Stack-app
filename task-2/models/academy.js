// models/academy.js
const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
  name: String,
  // Other academy-related fields
});

module.exports = mongoose.model('Academy', academySchema);
