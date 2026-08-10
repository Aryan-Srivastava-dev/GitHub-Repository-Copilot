import express from "express";
import { login, callback } from "../controllers/authController.js";
import { authenticate } from "../middleware/auth.js";
import { dashboard } from "../controllers/dashboardController.js";
const router = express.Router();

router.get("/github/login", login);
router.get("/github/callback", callback);
router.get("/dashboard", authenticate, dashboard);

export default router;
