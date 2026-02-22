import axios from 'axios';

/**
 * AI SERVICE CONFIGURATION
 * Handles all communication with OpenRouter API.
 */

const BASE_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

// Models from Mandatory Config
const VISION_MODEL = 'allenai/molmo-2-8b:free';
const TEXT_MODEL = 'liquid/lfm-2.5-1.2b-thinking:free';

/**
 * STRICT SYSTEM PROMPT
 * Enforces spiritual tone, safety, and language rules.
 */
const getSystemPrompt = (language, userName) => {
  const languageMap = {
    en: "English",
    hi: "Hindi",
    es: "Spanish",
    fr: "French",
    it: "Italian",
    ko: "Korean"
  };

  const selectedLanguage = languageMap[language] || "English";

  return `
    You are a Master Spiritual Guide, Professional Palmist, and Tarot Expert.
    User's Name: ${userName}
    Language: You MUST respond strictly in ${selectedLanguage}.

    STRICT OPERATING PRINCIPLES:
    1. TONE: Calm, poetic, human-like, and deeply spiritual.
    2. NO FEAR: Never use language that creates anxiety or fear. Focus on potential and energy.
    3. NO PREDICTIONS: Do not give guaranteed future predictions. Use terms like "inclinations", "possibilities", and "paths".
    4. NO MEDICAL/LEGAL ADVICE: If asked, politely state you are a spiritual guide, not a professional consultant.
    5. OUTPUT FORMAT: Long-form, structured with headings, and highly symbolic. Avoid short, robotic answers.
    6. PALM READING: Focus on interpreting the Heart Line, Head Line, Life Line, and Fate Line as reflections of character and current energy.
  `.trim();
};

const aiService = {
  /**
   * General Astrology & Tarot Text Generation
   */
  async getTextGuidance(prompt, language, userName, context = {}) {
    try {
      const systemPrompt = getSystemPrompt(language, userName);
      
      const response = await axios.post(
        BASE_URL,
        {
          model: TEXT_MODEL,
          messages: [
            { role: 'system', content: systemPrompt },
            { 
              role: 'user', 
              content: `Additional Context: ${JSON.stringify(context)}. \n\nQuery: ${prompt}` 
            }
          ],
          temperature: 0.7,
          max_tokens: 1500
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'HTTP-Referer': window.location.origin,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('AI Text Guidance Error:', error);
      throw new Error('The stars are temporarily obscured. Please try again soon.');
    }
  },

  /**
   * Palm Image Analysis (Vision)
   */
  async analyzePalmImage(imageBase64, language, userName, userDetails) {
    try {
      const systemPrompt = getSystemPrompt(language, userName);

      const response = await axios.post(
        BASE_URL,
        {
          model: VISION_MODEL,
          messages: [
            { role: 'system', content: systemPrompt },
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: `Analyze this palm image for ${userName}. Focus on the main lines (Heart, Head, Life, Fate). User Details: ${JSON.stringify(userDetails)}.`
                },
                {
                  type: 'image_url',
                  image_url: {
                    url: imageBase64 // Must be data:image/jpeg;base64,...
                  }
                }
              ]
            }
          ]
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'HTTP-Referer': window.location.origin,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('AI Vision Error:', error);
      throw new Error('The cosmic scan was interrupted. Please ensure the image is clear.');
    }
  }
};

export default aiService;
