import env from "dotenv";
import mongoose from "mongoose";

env.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected to database 🚀");
  } catch (err) {
    console.log("error : ", err.message);

    process.exit(1);
  }
};
