import express from "express";
import {
  findOrCreateUser,
  getAllUsers,
  getUserByUsername,
} from "../services/user.service.js";

const router = express.Router();

// GET /users
router.get("/users", (req, res) => {
  const allUsers = getAllUsers();
  res.status(200).json(allUsers);
});

// GET /users/:username
router.get("/users/:username", (req, res) => {
  const { username } = req.params;

  const user = getUserByUsername(username);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

// POST /user/login
router.post("/user/login", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "username is required" });
  }

  const user = findOrCreateUser(username);

  res.status(200).json(user);
});

export default router;
