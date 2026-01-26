import express from "express";

const app = express();
const PORT = 3000;

// fake async DB call
const getUserFromDatabase = async () => {
  return {
    username: "Steven",
    loginCount: 5,
  };
};

app.get("/user", async (req, res) => {
  const user = await getUserFromDatabase();
  user.loginCount += 1;
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
