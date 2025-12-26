import { Schema, model } from "mongoose";
import { IUser } from "../types/user.types";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    role: { type: String, default: "user" }
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
