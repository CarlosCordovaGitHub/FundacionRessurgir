const natural = require('natural');
const { levenshtein } = require('natural/lib/natural/distance/levenshtein_distance');

// Initialize tokenizer
const tokenizer = new natural.WordTokenizer();

// Define information categories and their related terms
const INFORMATION_CATEGORIES = {
  EMERGENCY: {
    terms: ['emergency', 'crisis', 'suicide', 'urgent', 'help', 'emergency', 'overdose', 'immediate'],
    priority: 1,
  },
  TREATMENT: {
    terms: ['treatment', 'rehab', 'rehabilitation', 'therapy', 'counseling', 'program', 'recovery', 'detox'],
    priority: 2,
  },
  SUPPORT: {
    terms: ['support', 'group', 'meeting', 'community', 'family', 'help', 'assistance'],
    priority: 2,
  },
  EDUCATION: {
    terms: ['information', 'learn', 'understand', 'effects', 'risks', 'signs', 'symptoms'],
    priority: 3,
  },
  PREVENTION: {
    terms: ['prevent', 'avoid', 'stop', 'quit', 'prevention', 'risk'],
    priority: 3,
  },
};

// Emergency response information
const EMERGENCY_RESOURCES = {
  text: "If you or someone you know is experiencing a medical emergency or crisis, please call emergency services immediately:\n" +
        "• Emergency: 911\n" +
        "• National Crisis Hotline: 988\n" +
        "• Substance Abuse Helpline: 1-800-662-4357\n" +
        "These services are available 24/7 and are completely confidential.",
  suggestions: ["Find treatment centers", "Join support groups", "Learn about prevention"]
};

// Define knowledge base with carefully crafted responses
const KNOWLEDGE_BASE = {
  TREATMENT: {
    general: {
      text: "Treatment options for addiction include:\n" +
            "• Professional counseling and therapy\n" +
            "• Medically supervised detoxification\n" +
            "• Inpatient rehabilitation programs\n" +
            "• Outpatient treatment programs\n" +
            "• Support groups and peer counseling\n\n" +
            "Would you like help finding treatment resources in your area?",
      suggestions: ["Find local treatment centers", "Learn about treatment types", "Contact a counselor"]
    },
    // Add more specific treatment information...
  },
  SUPPORT: {
    general: {
      text: "Support is available through various channels:\n" +
            "• Local support groups\n" +
            "• Online communities\n" +
            "• Family counseling services\n" +
            "• Peer support programs\n" +
            "• Professional counseling\n\n" +
            "All communications are confidential and judgment-free.",
      suggestions: ["Find support groups", "Family resources", "Counseling options"]
    },
    // Add more specific support information...
  },
  EDUCATION: {
    general: {
      text: "Understanding addiction is an important step. Key points include:\n" +
            "• Addiction is a medical condition, not a moral failing\n" +
            "• Recovery is possible with proper support and treatment\n" +
            "• Early intervention improves outcomes\n" +
            "• Support from family and friends is crucial\n" +
            "Would you like to learn more about any specific aspect?",
      suggestions: ["Learn about recovery", "Understanding addiction", "Prevention strategies"]
    },
    // Add more specific educational information...
  },
  PREVENTION: {
    general: {
      text: "Prevention strategies include:\n" +
            "• Understanding risk factors\n" +
            "• Developing healthy coping mechanisms\n" +
            "• Building strong support systems\n" +
            "• Seeking help early\n" +
            "• Maintaining physical and mental health\n" +
            "Would you like more specific information about prevention?",
      suggestions: ["Risk factors", "Healthy coping", "Early intervention"]
    },
    // Add more specific prevention information...
  }
};

async function findRelevantInformation(question) {
  // Normalize and tokenize the question
  const normalizedQuestion = question.toLowerCase();
  const tokens = tokenizer.tokenize(normalizedQuestion);

  // Check for emergency keywords first
  if (isEmergency(tokens)) {
    return EMERGENCY_RESOURCES;
  }

  // Find the most relevant category
  const category = findMostRelevantCategory(tokens);
  
  // Get appropriate response based on category and context
  return generateResponse(category, normalizedQuestion);
}

function isEmergency(tokens) {
  return tokens.some(token => 
    INFORMATION_CATEGORIES.EMERGENCY.terms.some(term => 
      levenshtein(token, term) <= 1
    )
  );
}

function findMostRelevantCategory(tokens) {
  let maxScore = 0;
  let bestCategory = 'EDUCATION'; // Default to educational response

  for (const [category, info] of Object.entries(INFORMATION_CATEGORIES)) {
    if (category === 'EMERGENCY') continue; // Already handled

    const score = calculateRelevanceScore(tokens, info.terms) * info.priority;
    if (score > maxScore) {
      maxScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}

function calculateRelevanceScore(tokens, terms) {
  return tokens.reduce((score, token) => {
    const termMatch = terms.some(term => levenshtein(token, term) <= 1);
    return score + (termMatch ? 1 : 0);
  }, 0);
}

function generateResponse(category, question) {
  // Start with general response for the category
  const response = KNOWLEDGE_BASE[category].general;

  // Add a compassionate prefix
  const prefix = "Thank you for reaching out. ";
  
  return {
    text: prefix + response.text,
    suggestions: response.suggestions
  };
}

// Export the function using CommonJS syntax
module.exports = { findRelevantInformation };