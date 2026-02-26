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
📌 Additional Requirements (Important – Startup Level Expectation)

✅ Proper folder structure (MVC pattern preferred)
✅ Authentication middleware
✅ Proper error handling (global error handler preferred)
✅ Use async/await
✅ Proper HTTP status codes
✅ Validate input data
✅ User can only access their own tasks

📌 Bonus (If Time Permits)

⭐ Pagination on GET /api/tasks
⭐ Filter by status & sort by due date
⭐ Add rate limiting middleware

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

🎯 What Interviewer Will Evaluate

Clean Code Structure

JWT Implementation

Middleware Knowledge

MongoDB Schema Design

Security Practices

Edge Case Handling

API Design Understanding