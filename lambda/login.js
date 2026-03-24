import { findOrCreateUser } from "../src/services/user.service.js";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const { username } = body;

    if (!username) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "username is required" }),
      };
    }

    const user = findOrCreateUser(username);

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
