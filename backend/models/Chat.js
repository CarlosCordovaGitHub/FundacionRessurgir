const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    index: true
  },
  messages: [{
    content: String,
    isBot: Boolean,
    timestamp: Date,
    page: String
  }],
  metadata: {
    firstVisit: {
      type: Date,
      default: Date.now
    },
    lastActivity: {
      type: Date,
      default: Date.now
    },
    pagesVisited: [String]
  }
}, {
  timestamps: true
});

// Automatically expire old sessions after 24 hours of inactivity
chatSchema.index({ "metadata.lastActivity": 1 }, { expireAfterSeconds: 86400 });

module.exports = mongoose.model('Chat', chatSchema);