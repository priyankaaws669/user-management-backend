# User Management Backend (CRUD API)

This is the backend of a User Management application built using Node.js and Express. It provides RESTful APIs to create, read, update, and delete user data.

---

## 🚀 Features

* Create new users
* Get all users
* Update user details
* Delete users
* REST API structure

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* JavaScript

---

## 📂 Project Structure

```
server.js
package.json
```

---

## ⚙️ How It Works

* Receives HTTP requests from frontend
* Processes data using Express routes
* Stores data in-memory (array)
* Sends JSON response back to frontend

---

## 🌐 API Endpoints

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| GET    | /users            | Get all users |
| POST   | /users/post       | Create user   |
| PATCH  | /users/patch/:id  | Update user   |
| DELETE | /users/delete/:id | Delete user   |

---

## ☁️ Deployment

* Hosted on AWS EC2
* Server runs on port 3000
* Accessible via public IP

---

## 🧪 Run Locally

```bash
npm install
node server.js
```

---

## 🔗 Frontend Repository

https://github.com/priyankaaws669/user-management-frontend

---

## 📌 Challenges Faced

* Handling PATCH requests correctly
* Debugging 500 Internal Server Error
* Managing dynamic route parameters
* Understanding req.body and req.params

---

## 📈 Future Improvements

* Integrate MongoDB database
* Add authentication (JWT)
* Add input validation
* Error handling improvements

---
