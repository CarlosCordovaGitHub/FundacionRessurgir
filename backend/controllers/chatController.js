// chatController.js
const Chat = require('../models/Chat.js');
const findRelevantInformation = require('../utils/informationFinder.js');

const processQuestion = async (req, res) => {
  try {
    const { question, sessionId, page } = req.body;

    // Basic input validation
    if (!question?.trim() || !sessionId?.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Invalid input'
      });
    }

    // Find or create chat session
    let chat = await Chat.findOneAndUpdate(
      { sessionId },
      {
        $push: {
          messages: {
            content: question,
            isBot: false,
            timestamp: new Date(),
            page
          }
        },
        $set: {
          'metadata.lastActivity': new Date()
        },
        $addToSet: {
          'metadata.pagesVisited': page
        }
      },
      { upsert: true, new: true }
    );

    // Generate response based on the question
    const response = await findRelevantInformation(question);

    // Save bot response
    await Chat.findOneAndUpdate(
      { sessionId },
      {
        $push: {
          messages: {
            content: response.text,
            isBot: true,
            timestamp: new Date()
          }
        }
      }
    );

    res.status(200).json({
      success: true,
      response: response.text,
      suggestions: response.suggestions
    });

  } catch (error) {
    console.error('Error processing chat:', error);
    res.status(500).json({
      success: false,
      error: 'Unable to process your question'
    });
  }
};

module.exports = { saveQuestion: processQuestion }; // Aquí exportamos correctamente
