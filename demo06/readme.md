# SkillBridge API – Backend Developer Assignment

## 📌 Overview

You are required to build a RESTful backend API for an EdTech platform named **SkillBridge**.

The platform allows:
- Students to enroll in courses
- Mentors to create and manage courses
- Admins to manage users and monitor platform activity

This assignment evaluates:

- API design skills
- Authentication & authorization implementation
- Database schema design
- Code structure & best practices
- Edge case handling

---

## ⏳ Time Limit

**Maximum: 3 Hours**

---

## 🛠 Tech Stack (Mandatory)

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (for password hashing)
- Proper MVC structure

 

## 📂 Expected Folder Structure

```
config/
controllers/
middleware/
models/
routes/
utils/
server.js
```

---

## 🗄 Database Models

### 1️⃣ User Model

| Field      | Type   | Required | Notes                              |
|------------|--------|----------|------------------------------------|
| name       | String | Yes      |                                    |
| email      | String | Yes      | Unique                             |
| password   | String | Yes      | Must be hashed                     |
| role       | Enum   | Yes      | student \| mentor \| admin         |
| createdAt  | Date   | Auto     | Default: current date              |

---

### 2️⃣ Course Model

| Field              | Type      | Required | Notes                            |
|--------------------|----------|----------|----------------------------------|
| title              | String   | Yes      |                                  |
| description        | String   | Yes      |                                  |
| price              | Number   | Yes      |                                  |
| mentor             | ObjectId | Yes      | Ref: User                        |
| studentsEnrolled   | [ObjectId] | No     | Array of User references         |
| createdAt          | Date     | Auto     | Default: current date            |

---

## 🔐 Authentication & Authorization

### Registration

- Only **students** can self-register.
- **Mentor** and **admin** accounts can only be created by an admin.

### Login

- Return JWT token on successful login.
- Token expiry must be **1 hour**.

### Required Middleware

- Authentication middleware (JWT verification)
- Role-based authorization middleware

---

## 🚀 API Requirements

---

### 👨‍🏫 Mentor APIs

Authenticated mentor should be able to:

- Create a course
- Update their own course
- Delete their own course
- Get all courses created by them

**Restrictions:**
- Mentor must not update or delete other mentors’ courses.

---

### 🎓 Student APIs

Authenticated student should be able to:

- View all courses
- Enroll in a course
- View enrolled courses

**Restrictions:**
- Student must not enroll in the same course twice.

---

### 🛠 Admin APIs

Authenticated admin should be able to:

- View all users
- Delete any user
- View all courses

#### Special API

```
GET /api/admin/top-mentor
```

**Logic:**
- Identify mentor whose courses have the highest total enrolled students.
- Return mentor details along with total enrollment count.

---

## 📋 Business Rules

- Password must be hashed using bcrypt.
- Duplicate email registration must be prevented.
- Duplicate course enrollment must be prevented.
- Proper HTTP status codes must be used.
- Invalid or expired JWT must return appropriate response.
- All async operations must use async/await.
- Proper error handling must be implemented.

---

## ⚠ Edge Cases to Handle

- Enrolling in a non-existing course
- Updating/deleting non-existing course
- Invalid ObjectId
- Unauthorized role access
- Missing required fields
- Invalid JWT token
- Attempt to delete already deleted user

---

## 🌟 Bonus Features

- Pagination on course listing
- Search course by title (query parameter)
- Input validation using express-validator
- Global error handling middleware
- Standardized API response format

---

## 📦 Submission Guidelines

Submit a GitHub repository containing:

- Complete source code
- Proper folder structure
- README.md (this file)
- Postman collection export
- `.env.example` file

---

## 📊 Evaluation Criteria

- Code structure and readability
- Authentication & authorization implementation
- Database design
- Error handling
- Edge case coverage
- Use of best practices

---

## 🧠 Objective

Build this project as if you are submitting it to a startup hiring process.  
Focus on clean architecture, security, and maintainable code.

---

**Good luck 🚀**
