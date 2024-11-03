const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: false
  },
  messages: [{
    text: {
      type: String,
      required: true
    },
    isBot: {
      type: Boolean,
      default: false
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);