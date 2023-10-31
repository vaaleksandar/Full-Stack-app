// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware setup
app.use(express.json());

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://vaaleksandar:<password>@cluster0.xaadjen.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Set up routes (to be added later)
// Example: const coursesRoutes = require('./routes/courses');
// app.use('/courses', coursesRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
