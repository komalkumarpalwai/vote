const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const voteRoutes = require('./routes/votes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/votes', voteRoutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.error(err));
