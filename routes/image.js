import express from "express";
import multer from "multer";

import { auth } from "../middlewares/auth.js";

import { create, search } from "../controllers/image.js";

const router = express.Router();

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/upload", auth, upload.single("image"), create);

router.get("/search", auth, search);

export default router;
