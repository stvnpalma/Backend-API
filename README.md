#  Serverless User API

A simple backend API built with Node.js that supports user login tracking and retrieval, implemented using a clean architecture and deployed with AWS Lambda.

---

## Features

* ✅ Create or login a user
* ✅ Track login count
* ✅ Retrieve all users
* ✅ Clean architecture (routes → services → data)
* ✅ Serverless-ready (AWS Lambda compatible)
* ✅ Basic test coverage

---

## Project Structure

```
src/
  data/
    user.store.js       # In-memory data store
  services/
    user.service.js     # Business logic
  routes/
    user.routes.js      # API routes
  app.js                # Express app setup

lambda/
  router.js             # Lambda handler (API Gateway routing)

index.js                # Local server entry point
test.js                 # Basic tests
```

---

##  Tech Stack

* Node.js
* Express
* AWS Lambda
* API Gateway
* esbuild (for bundling)

---

##  Running Locally

### 1. Install dependencies

```
npm install
```

### 2. Start the server

```
node index.js
```

Server will run on:

```
http://localhost:3000
```

---

##  API Endpoints

###  Login User

**POST** `/user/login`

```
curl -X POST http://localhost:3000/user/login \
  -H "Content-Type: application/json" \
  -d '{"username":"Steven"}'
```

**Response:**

```
{
  "username": "Steven",
  "loginCount": 1
}
```

---

###  Get All Users

**GET** `/users`

```
curl http://localhost:3000/users
```

**Response:**

```
[
  {
    "username": "Steven",
    "loginCount": 3
  }
]
```

---

##  Running Tests

```
node test.js
```

---

##  AWS Lambda Deployment

The project includes a Lambda-compatible router:

```
lambda/router.js
```

This allows the API to run behind API Gateway using a single handler function.

Example Lambda event:

```
{
  "httpMethod": "GET",
  "path": "/users"
}
```

---

##  Key Concepts Learned

* Separation of concerns
* Stateless architecture (Lambda)
* Routing vs business logic
* Basic testing with assertions
* Debugging Node.js module issues
* API design fundamentals

---

## Notes

* Data is stored in memory (resets on restart)
* Not connected to a real database (yet)

---

##  Future Improvements

* Add persistent database (DynamoDB)
* Add input validation & error handling middleware
* Add authentication (JWT)
* Deploy using AWS SAM or CI/CD pipeline

---

##  Author

Steven Palma

---

##  License

ISC
