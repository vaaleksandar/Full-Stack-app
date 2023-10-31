
const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: String,
  address: String,
  faculties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Faculty',
    },
  ],
});

module.exports = mongoose.model('University', universitySchema);
