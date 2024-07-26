const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');
const genresRouter = require('./routes/genres');

app.use('/authors', authorsRouter);
app.use('/books', booksRouter);
app.use('/genres', genresRouter);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3001, () => {
      console.log('Server is running');
    });
  })
  .catch(err => {
    console.error('Connection error', err);
  });
