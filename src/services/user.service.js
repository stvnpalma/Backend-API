import { users } from "../data/user.store.js";

export function getAllUsers() {
  return users;
}

export const findOrCreateUser = (username) => {
  let user = users.find((u) => u.username === username);

  if (!user) {
    user = { username, loginCount: 0 };
    users.push(user);
  }

  return user;
};

export function getUserByUsername(username) {
  return users.find((u) => u.username === username);
}
