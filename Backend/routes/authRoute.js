import express from "express";
import { login, callback } from "../controllers/authController.js";
const router = express.Router();

router.get("/github/login", login);
router.get("/github/callback", callback);

export default router;
