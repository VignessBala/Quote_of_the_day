const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Quote = require('./models/Quote');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
];

Quote.insertMany(quotes)
  .then(() => {
    console.log('Quotes added');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
