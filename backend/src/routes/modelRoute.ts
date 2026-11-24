import { getModels } from "../controller/modelController";
import { Router } from "express";

const router = Router();

router.get("/models", getModels);

export default router;
