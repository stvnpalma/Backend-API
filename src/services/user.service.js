import { users } from "../data/user.store.js";

export const findOrCreateUser = (username) => {
  let user = users.find((u) => u.username === username);

  if (!user) {
    user = { username, loginCount: 0 };
    users.push(user);
  }

  return user;
};
