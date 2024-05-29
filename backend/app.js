
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/bookroutes');  
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/book', router);  // Use the router


const mongoURL = 'mongodb+srv://ayushiwadhwa1804:Yo6OtuncHZIdTpsV@cluster0.qussjuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

  