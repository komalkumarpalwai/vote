const express = require('express');
const Vote = require('../models/Vote');
const router = express.Router();

router.post('/', async (req, res) => {
  const { team } = req.body;
  const user = req.ip; // This is a simple way to track users, but it's not foolproof

  try {
    const existingVote = await Vote.findOne({ user });
    if (existingVote) {
      return res.status(400).json({ message: 'You have already voted' });
    }

    const vote = new Vote({ team, user });
    await vote.save();
    res.status(201).json({ message: 'Vote recorded' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
