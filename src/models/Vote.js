const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  team: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true,
    unique: true
  }
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
