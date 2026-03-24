import { getAllUsers } from "../src/services/user.service.js";

export const handler = async () => {
  try {
    const users = getAllUsers();

    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
