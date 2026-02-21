const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  githubLink: String,
});

module.exports = mongoose.model('Project', projectSchema);
