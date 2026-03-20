import assert from "assert";
import { resetUsers } from "./src/data/user.store.js";

resetUsers();

import {
  findOrCreateUser,
  getAllUsers,
  getUserByUsername,
} from "./src/services/user.service.js";

console.log("Running tests...\n");

// Test 1: create user
const user1 = findOrCreateUser("Steven");
assert.strictEqual(user1.username, "Steven");
assert.strictEqual(user1.loginCount, 1);
console.log("✅ Test 1 passed");

// Test 2: login increments count
const user2 = findOrCreateUser("Steven");
assert.strictEqual(user2.loginCount, 2);
console.log("✅ Test 2 passed");

// Test 3: get all users
const allUsers = getAllUsers();
assert.ok(Array.isArray(allUsers));
assert.ok(allUsers.length > 0);
console.log("✅ Test 3 passed");

// Test 4: get user by username
const foundUser = getUserByUsername("Steven");
assert.strictEqual(foundUser.username, "Steven");
console.log("✅ Test 4 passed");

// Test 5: user not found
const missingUser = getUserByUsername("Unknown");
assert.strictEqual(missingUser, undefined);
console.log("✅ Test 5 passed");

console.log("\n🎉 All tests passed!");
