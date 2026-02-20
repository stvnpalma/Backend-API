import express from "express";
import { findOrCreateUser, getAllUsers } from "../services/user.service.js";

const router = express.Router();

// GET /users
router.get("/users", (req, res) => {
  const allUsers = getAllUsers();
  res.status(200).json(allUsers);
});

// POST /user/login
router.post("/user/login", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "username is required" });
  }

  const user = findOrCreateUser(username);
  user.loginCount += 1;

  res.status(200).json(user);
});

export default router;
