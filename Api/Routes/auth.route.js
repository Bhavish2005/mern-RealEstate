import express from 'express';
import { googlelogin, signin, signup } from '../Controllers/auth.controller.js';


const router = express.Router();


router.post("/signup", signup)
router.post("/signin", signin)
router.post("/googlelogin",googlelogin)

export default router;