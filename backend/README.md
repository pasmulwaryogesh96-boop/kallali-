# 🌾 Kallali Backend

Backend service for **Kallali**, an AI-powered farmer marketplace.

Built with **Express.js**, **TypeScript**, **PostgreSQL**, **Drizzle ORM**, and **JWT Authentication**.

---

## 🚀 Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Role-Based Authorization (RBAC)
- PostgreSQL Database
- Drizzle ORM
- RESTful API

---

## 🛠 Tech Stack

- Express.js
- TypeScript
- PostgreSQL
- Drizzle ORM
- JWT
- bcrypt
- pnpm

---

## 📁 Project Structure

```
backend/
│
├── src/
│   ├── app.ts
│   ├── index.ts
│   │
│   ├── routes/
│   │   └── auth.ts
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   └── role.middleware.ts
│   │
│   ├── lib/
│   │   └── jwt.ts
│   │
│   └── db/
│       └── schema.ts
│
├── package.json
└── tsconfig.json
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/<your-username>/kallali.git
```

## Go to backend

```bash
cd kallali/backend
```

## Install dependencies

```bash
pnpm install
```

## Configure Environment

Copy the example environment file.

```bash
cp .env.example .env
```

Update your database credentials and JWT secret.

---

## Start Development Server

```bash
pnpm dev
```

Backend runs on

```
http://localhost:3001
```

---

# 🔐 Authentication

Authentication uses **JWT Bearer Tokens**.

Example:

```
Authorization: Bearer <your_jwt_token>
```

---

# 🌐 API Endpoints

## Health

| Method | Endpoint |
|---------|----------|
| GET | `/api/healthz` |

---

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/me` | Get logged-in user |
| GET | `/api/auth/admin` | Admin-only route |

---

# 📦 Environment Variables

Create a `.env` file inside the backend folder.

Required variables:

```env
PORT=3001

DATABASE_URL=

JWT_SECRET=

JWT_EXPIRY=7d

CORS_ORIGIN=http://localhost:5173
```

---

# 🗄 Database

Database:

- PostgreSQL

ORM:

- Drizzle ORM

---

# 🔒 Security

Current security features:

- Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes
- Role-Based Authorization
- Environment Variables
- Secure Password Storage

---

# 🧪 Testing

Current endpoints can be tested using:

- Postman
- curl
- Thunder Client

Example:

```bash
curl http://localhost:3001/api/healthz
```

---

# 📌 Current Status

✅ Authentication Complete

✅ Authorization Complete

✅ Database Integration Complete

🚧 Frontend Integration In Progress

🚧 Product Management Coming Soon

🚧 Marketplace Coming Soon

🚧 AI Features Planned

---

# 📄 License

This project is licensed under the MIT License.

See the LICENSE file for details.
