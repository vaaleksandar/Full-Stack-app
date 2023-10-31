
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/university-faculty-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// definiranje na ruti 
const universityRoutes = require('./routes/university');
const facultyRoutes = require('./routes/faculty');

app.use('/universities', universityRoutes);
app.use('/faculties', facultyRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
