import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getMe } from "../controllers/authController";
const router = Router();

router.get("/", protectRoute, getMe)

export default router;