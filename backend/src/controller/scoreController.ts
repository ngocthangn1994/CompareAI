import { rateAnswer } from "../services/rateAnswer";
import { Request, Response } from "express";
const scoreController = async (req: Request, res: Response) => {
  try {
    const { prompt, answer } = req.body;

    const answers = answer.map((r: any) => r.choices[0].message.content);

    if (!prompt || !Array.isArray(answer) || answer.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Prompt and answer are required.",
      });
    }
    let data = await rateAnswer(prompt, answers);
    const cleanData = data.content.find((key) => key.type === "text");
    if (!cleanData || cleanData.type !== "text") {
      throw new Error("Scoring response did not contain text.");
    }

    const result = JSON.parse(cleanData.text);

    res.status(200).json({
      success: true,
      message: "Successfully scored models.",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err instanceof Error ? err.message : "Failed to score models.",
    });
  }
};

export default scoreController;
