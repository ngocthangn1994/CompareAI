import { Request, Response } from "express";
import { compareAnswer } from "../services/fetchAnswer";

export const compareModels = async (req: Request, res: Response) => {
  try {
    const { prompt, models } = req.body;
    let data = await compareAnswer(prompt, models);
    res.status(201).json({
      success: true,
      message: `Succesfully get AI Compare Models of ${models} - Prompt: ${prompt}`,
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to compare AI Models",
    });
  }
};
