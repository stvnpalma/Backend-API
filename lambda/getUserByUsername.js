import { getUserByUsername } from "../src/services/user.service.js";

export const handler = async (event) => {
  try {
    const username = event.pathParameters?.username;

    if (!username) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "username parameter is required" }),
      };
    }
    const user = getUserByUsername(username);

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "User not found" }),
      };
    }

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
