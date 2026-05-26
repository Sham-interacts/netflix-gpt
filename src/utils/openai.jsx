import OpenAI from 'openai';
import { GROQ_OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: GROQ_OPENAI_KEY, // This is the default and can be omitted
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export default openai;