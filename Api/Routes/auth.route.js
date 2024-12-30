import express from 'express';
import { signup } from '../Controllers/auth.controller.js';




const router = express.Router();

// Define your routes here
router.post("/signup", signup)
export default router;