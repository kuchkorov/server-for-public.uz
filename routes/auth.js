import express from "express";
import { register, login, logout } from "../controllers/auth.js";
const router = new express.Router();

router.post("/registr", register)
router.post("/login", login)
router.post("/logout", logout)

export default router;
