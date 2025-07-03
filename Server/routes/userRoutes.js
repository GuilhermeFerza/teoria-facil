import express from "express";
import { loginUser } from "../controllers/userController.js";
import { createUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/post", createUser);
router.post("/login", loginUser);
router.get("/", getUsers);

export default router;
