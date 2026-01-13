
import { GoogleGenAI, Type } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS_DATA, SKILLS_CATEGORIES } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });
  }

  async askAssistant(question: string) {
    const context = `
      You are the AI Full-Stack Consultant for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.role}.
      
      PERSONALITY:
      - Technically elite but highly helpful.
      - Expert in the MERN Stack (MongoDB, Express, React, Node.js).
      - Passionate about clean code, scalability, and modern web architectures.
      
      CONTEXT DATA:
      - Tagline: ${PERSONAL_INFO.tagline}
      - Bio: ${PERSONAL_INFO.about}
      - Core Skills: ${SKILLS_CATEGORIES.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join(' | ')}
      - Projects: ${PROJECTS.map(p => `${p.title} (Stack: ${p.tags.join(', ')}): ${p.description}`).join(' --- ')}
      
      INSTRUCTIONS:
      1. Answer questions concisely and professionally.
      2. If asked about his contact info, provide ${PERSONAL_INFO.email}.
      3. If asked about a project, explain the MERN components used.
      4. Always advocate for ${PERSONAL_INFO.name}'s technical ability in building end-to-end solutions.
      5. Keep responses under 100 words unless explaining a complex technical topic.
      6. IMPORTANT: Do NOT use markdown formatting (like **bold**, *italic*, or ## headers). The chat interface only supports plain text.
      7. If the user greets you with "Hi", "Hello", or similar short greetings, reply with a SHORT, 1-2 sentence welcome message. Do NOT provide the full bio unless asked.
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: context,
          temperature: 0.65,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm experiencing a high-load state right now. Please try again in a moment, or reach out to Marcus directly via email.";
    }
  }
}

export const geminiService = new GeminiService();
