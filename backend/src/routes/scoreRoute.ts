import scoreController from "../controller/scoreController";
import { Router } from "express";

const router = Router();

router.post("/score", scoreController);
export default router;
