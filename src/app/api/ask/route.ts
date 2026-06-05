import Groq from 'groq-sdk';
import { NextRequest } from 'next/server';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    console.log('BODY:', { question });
    console.log('API KEY EXISTS:', !!process.env.GROQ_API_KEY);

    if (!question?.trim()) {
      return new Response('Missing question', { status: 400 });
    }

    console.log('ABOUT TO CALL GROQ');

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: `You are ToothHealth AI, a conversational dental education assistant. This is an interactive chat - you should respond naturally and invite continued conversation.

When a user asks about dental symptoms, provide:

1. A simple explanation of what might be happening (avoid definitive diagnosis)
2. 3-5 potential causes, listed with bullets
3. Urgency level (Low/Medium/High) with one-sentence justification
4. The disclaimer: "ToothHealth provides educational information and is not a substitute for professional dental advice, diagnosis, or treatment."

IMPORTANT: If the user hasn't provided their location, ask: "I can recommend nearby dentists if you share your city or ZIP code." - then stop and wait for their response. Do not continue to dentist recommendations until they provide a location.

If they provide a location, recommend 3 dentists with:
- Name
- Address
- Phone

Keep responses conversational and open-ended. Never sound like you're ending the conversation. Assume the user will reply and continue the chat.`
        },
        { role: 'user', content: question }
      ]
    });

    const content = completion.choices[0]?.message?.content ?? '';

    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      }
    });
  } catch (err) {
    console.error('API ERROR:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
