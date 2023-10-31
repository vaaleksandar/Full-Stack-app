
const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: String,
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
  },
});

module.exports = mongoose.model('Faculty', facultySchema);
