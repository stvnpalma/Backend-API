import { handler } from "./getUsers.js";

const response = await handler();

console.log("Lambda response:");
console.log(response);
