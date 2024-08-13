import env from "dotenv";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

env.config();

export const auth = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    console.log("error : ", err.message);

    res.status(401).json({ message: "invalid token" });
  }
};
