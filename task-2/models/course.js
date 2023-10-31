// models/course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  academy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Academy',
  },
});

module.exports = mongoose.model('Course', courseSchema);
