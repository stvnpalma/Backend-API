import express from "express";
import { users } from "../data/user.store.js";
import { findOrCreateUser } from "../services/user.service.js";

const router = express.Router();

// GET /user
router.get("/user", (req, res) => {
  res.json(users[0]);
});

// POST /user/login
router.post("/user/login", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "username is required" });
  }

  const user = findOrCreateUser(username);
  user.loginCount += 1;

  res.json(user);
});

export default router;
