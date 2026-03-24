var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lambda/login.js
var login_exports = {};
__export(login_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(login_exports);

// src/data/user.store.js
var users = [];
var getUsers = () => users;

// src/services/user.service.js
var users2 = getUsers();
var findOrCreateUser = (username) => {
  let user = users2.find((u) => u.username === username);
  if (!user) {
    user = { username, loginCount: 0 };
    users2.push(user);
  }
  user.loginCount += 1;
  return user;
};

// lambda/login.js
var handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const { username } = body;
    if (!username) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "username is required" })
      };
    }
    const user = findOrCreateUser(username);
    return {
      statusCode: 200,
      body: JSON.stringify(user)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
