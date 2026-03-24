import { handler } from "./login.js";

const event = { body: JSON.stringify({ username: "Steven" }) };
const response = await handler(event);

console.log("Lambda response:");
console.log(response);
