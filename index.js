import env from "dotenv";
import express from "express";
import bodyParser from "body-parser";

import { connectDB } from "./config/db.js";

import AuthRouter from "./routes/auth.js";
import FolderRouter from "./routes/folder.js";
import ImageRouter from "./routes/image.js";

env.config();

const app = express();

// connect to database
connectDB();

// middleware
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/auth", AuthRouter);
app.use("/api/folders", FolderRouter);
app.use("/api/images", ImageRouter);

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT} 😎`);
});
