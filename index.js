import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [{ username: "Steven", loginCount: 5 }];

// fake async DB call
const getUserFromDatabase = async () => {
  return {
    username: "Steven",
    loginCount: 5,
  };
};

app.get("/user", async (req, res) => {
  const user = users[0];
  res.json(user);
});

app.post("/user/login", async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "username is required" });
  }

  let user = users.find((u) => u.username === username);

  if (!user) {
    user = { username, loginCount: 0 };
    users.push(user);
  }

  user.loginCount += 1;

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
