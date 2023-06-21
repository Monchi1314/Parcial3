const mongoose = require('mongoose');

const chatGptSchema = new mongoose.Schema({
  prompt: String,
  response: String,
  id_user: String,
  date_create: Date,
});

module.exports = mongoose.model('ChatGpt', chatGptSchema);
