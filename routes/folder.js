import express from "express";

import { auth } from "../middlewares/auth.js";

import { get, create } from "../controllers/folder.js";

const router = express.Router();

router.get("/", auth, get);

router.post("/", auth, create);

export default router;
