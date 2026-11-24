import type { Request, Response } from "express";
import { fetchModels } from "../services/modelServices";

// get Models.

export const getModels = async (req: Request, res: Response) => {
  try {
    const models = await fetchModels();
    res.status(200).json({
      success: true,
      message: "Successfully get all models from OpenRouter",
      data: models,
    });
  } catch (error) {
    console.error("Failed to get AI Models", error);
    res.status(502).json({
      success: false,
      message: "Failed to retrieve models from OpenRouter",
    });
  }
};
