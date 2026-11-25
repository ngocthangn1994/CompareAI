import Anthropic from "@anthropic-ai/sdk";
import env from "../config/env";

const anthropic = new Anthropic({ apiKey: env.CLAUDE_API_KEY });

export async function rateAnswer(prompt: string, answer: string[]) {
  const answersText = `
    Answer A: ${answer[0]},
    Answer B: ${answer[1]},
    Answer C: ${answer[2]}
  `;

  const message = await anthropic.messages.create({
    model: "claude-haiku-5-5",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: `        
            Score each answer to the prompt from 1-10 on accuracy, completeness, clarity, conciseness.
            Reply with ONLY JSON: {"scores":[{"model":"","accuracy":0,"completeness":0,"clarity":0,"conciseness":0,"reason":"short"}],"winner":"A|B|tie","verdict":"one sentence"}
            Prompt:\n${prompt}\n\n${answersText}`,
      },
    ],
  });

  return message;
}
