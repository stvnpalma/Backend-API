import { getUsers } from "../data/user.store.js";

const users = getUsers();

export function getAllUsers() {
  return users;
}

export const findOrCreateUser = (username) => {
  let user = users.find((u) => u.username === username);
  if (!user) {
    user = { username, loginCount: 0 };
    users.push(user);
  }
  user.loginCount += 1;
  return user;
};

export function getUserByUsername(username) {
  return users.find((u) => u.username === username);
}
