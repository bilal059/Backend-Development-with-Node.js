import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";
import { logger } from "./middlewares/logger.middleware";

dotenv.config();

const app = express();
app.use(express.json());
app.use(logger);

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI is missing in .env");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
