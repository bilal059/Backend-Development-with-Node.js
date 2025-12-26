import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/user.controller";
import { logger } from "../middlewares/logger.middleware";

const router = Router();

router.post("/", logger, createUser);
router.get("/", logger, getUsers);
router.get("/:id", logger, getUserById);
router.put("/:id", logger, updateUser);
router.delete("/:id", logger, deleteUser);

export default router;
