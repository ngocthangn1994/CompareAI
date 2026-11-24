import { compareModels } from "../controller/compareModel";
import { Router } from "express";

const router = Router();
router.post("/compare", compareModels);
export default router;
