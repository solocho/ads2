import { GoogleGenAI, Type } from "@google/genai";
import { BlogPost } from '../types';

// Safely access the API key supporting both standard Node process and Vite import.meta
const getApiKey = () => {
  // Check Vite/Modern standard
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_KEY) {
    // @ts-ignore
    return import.meta.env.VITE_API_KEY;
  }
  
  // Check Node/Webpack standard
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    return process.env.API_KEY;
  }

  // Fallback to window shim if exists
  // @ts-ignore
  if (typeof window !== 'undefined' && window.process && window.process.env && window.process.env.API_KEY) {
    // @ts-ignore
    return window.process.env.API_KEY;
  }

  return '';
};

const apiKey = getApiKey();

// Initialize lazily or safely
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey: apiKey });
}

export const generateBlogPost = async (topic: string): Promise<BlogPost | null> => {
  try {
    if (!ai) {
      console.warn("Gemini API not initialized. Missing API Key.");
      return {
        title: "API Key Missing",
        content: "<p>Please configure your API key in .env file (VITE_API_KEY) or environment variables to use the AI generator.</p>"
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Write a short, engaging blog post about "${topic}". 
      Include a catchy title.
      Format the content with HTML tags like <p>, <h3>, <ul>, <li> for styling. Do not include <html> or <body> tags, just the content.
      Keep it under 400 words.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING },
          },
          required: ["title", "content"],
        },
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as BlogPost;
  } catch (error) {
    console.error("Failed to generate blog post:", error);
    return null;
  }
};