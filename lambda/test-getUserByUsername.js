import { handler as getUserHandler } from "./getUserByUsername.js";
import { handler as loginHandler } from "./login.js";

await loginHandler({
  body: JSON.stringify({ username: "Steven" }),
});

const response = await getUserHandler({
  pathParameters: { username: "Steven" },
});

console.log("Lambda response:");
console.log(response);
