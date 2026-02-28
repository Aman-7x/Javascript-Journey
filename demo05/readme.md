🧩 Problem Statement: Build a Mini Task Management REST API (Express + MongoDB)

You are required to build a Task Management Backend API using Node.js, Express.js, and MongoDB (Mongoose).

This is strictly a backend-only task (No frontend required).

📌 Functional Requirements
1️⃣ User Authentication (JWT Based)

User Registration

POST /api/auth/register

Fields: name, email, password

Password must be hashed using bcrypt.

User Login

POST /api/auth/login

Return a JWT token on successful login.

2️⃣ Task Management APIs (Protected Routes)

All task routes must require a valid JWT token.

Each task contains:

{
  title: String (required),
  description: String (optional),
  status: "pending" | "in-progress" | "completed",
  dueDate: Date,
  user: ObjectId (reference to User)
}

📌 Required APIs
Method	Endpoint	Description
POST	/api/tasks	Create new task
GET	/api/tasks	Get all tasks of logged-in user
GET	/api/tasks/:id	Get single task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
 
 
📦 Expected Folder Structure
project/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── server.js

 
