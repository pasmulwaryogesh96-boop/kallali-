# 🌾 Kallali — Open-Source Farmer Marketplace

> Building in public 🚀
> An open-source full-stack agricultural marketplace connecting farmers and buyers.
> AI-powered farming features are planned as the project evolves.

![Status](https://img.shields.io/badge/Status-Active%20Development-success)
![Backend](https://img.shields.io/badge/Backend-Express.js-black)
![Frontend](https://img.shields.io/badge/Frontend-React-blue)
![Database](https://img.shields.io/badge/Database-PostgreSQL-336791)
![Language](https://img.shields.io/badge/Language-TypeScript-3178C6)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 🌱 About the Project

Kallali is a full-stack web application designed to modernize agricultural commerce by enabling farmers to sell directly to buyers through a secure digital marketplace.

The long-term vision is to combine marketplace functionality with AI-powered farming assistance, helping farmers make smarter decisions while improving market accessibility and transparency.

This repository documents the project as it is built in public.

---

# 🎯 Problem Statement

Many farmers face challenges such as:

- Limited access to direct buyers
- Dependence on middlemen
- Lack of transparent market pricing
- Limited access to modern farming guidance
- Difficulty managing products digitally

Kallali is being built to address these challenges through a secure digital marketplace, with AI-powered farming features planned for future releases.
---

# 🚀 Vision

The long-term vision for Kallali includes:

- 🏪 Farmer-to-Buyer Marketplace
- 🤖 AI Farming Assistant
- 📊 Smart Dashboards
- 📦 Product Management
- 💳 Secure Payments
- 📈 Business Insights

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- TypeScript
- React Router

## Backend

- Express.js
- TypeScript
- REST API

## Database

- PostgreSQL
- Drizzle ORM

## Security

- JWT Authentication
- bcrypt Password Hashing
- Role-Based Access Control (RBAC)

## Tools

- Git
- GitHub
- VS Code
- Postman
- pnpm

---

# 🏗 Architecture

```
React + Vite
      │
      │ HTTP Requests
      ▼
Express REST API
      │
Authentication Middleware
      │
Role Authorization
      │
Drizzle ORM
      │
PostgreSQL
```

---

# 👥 User Roles

## 👨‍🌾 Farmer

### Completed

- Secure Registration
- Secure Login

### Planned

- Manage Products
- View Orders
- AI Farming Assistant
- Dashboard

---

## 🛒 Buyer

### Planned

- Browse Products
- Purchase Products
- Order History
- Reviews

---

## 👨‍💼 Admin

### Planned

- User Management
- Product Moderation
- Analytics Dashboard

---

# ✅ Current Progress

## Backend Authentication

Completed

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication
- JWT Verification
- Authentication Middleware
- Protected Routes
- Role-Based Authorization
- PostgreSQL Integration
- Drizzle ORM Setup

---

# 🌐 REST API

```
POST   /api/auth/signup

POST   /api/auth/login

GET    /api/auth/me

GET    /api/auth/admin

GET    /api/healthz
```

---

# 🔐 Authentication Flow

```
Signup

User
 ↓
Express
 ↓
Hash Password
 ↓
PostgreSQL

----------------------

Login

User
 ↓
Verify Password
 ↓
Generate JWT
 ↓
Return Token

----------------------

Protected Route

Request
 ↓
Authentication Middleware
 ↓
Verify JWT
 ↓
Attach User
 ↓
Role Middleware
 ↓
Allow / Deny
```

---

# 📂 Project Structure

```
kallali/
├── backend/
│   ├── src/
│   ├── db/
│   ├── routes/
│   ├── middlewares/
│   ├── lib/
│   └── README.md
│
├── frontend/
│   └── README.md
│
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── .gitignore
```

---

# 🧪 Current Status

| Feature | Status |
|----------|--------|
| User Registration | ✅ Completed |
| User Login | ✅ Completed |
| Password Hashing | ✅ Completed |
| JWT Authentication | ✅ Completed |
| Protected Routes | ✅ Completed |
| Role-Based Authorization | ✅ Completed |
| Database Integration | ✅ Completed |
| React Integration | 🚧 In Progress |
| Product Module | ⏳ Planned |
| Marketplace | ⏳ Planned |
| AI Assistant | ⏳ Planned |
| Payments | ⏳ Planned |
| Deployment | ⏳ Planned |

---

> **Note**
>
> Kallali is under active development. Some features described in this README represent the planned roadmap and are not yet implemented.

# 🛣 Roadmap

## Phase 1 ✅

- Project Setup
- PostgreSQL
- Authentication
- Authorization

## Phase 2 🚧

- React Integration
- Login UI
- Signup UI
- Token Storage
- Protected Routes

## Phase 3

- Farmer Dashboard
- Product CRUD

## Phase 4

- Buyer Marketplace

## Phase 5

- AI Farming Features

## Phase 6

- Payments
- Orders
- Notifications

## Phase 7

- Admin Dashboard

## Phase 8

- Production Deployment

---

# 🎓 Skills Demonstrated

## Current Technologies

- Express.js
- PostgreSQL
- Drizzle ORM
- TypeScript
- JWT
- bcrypt
- REST APIs

 ## Planned Technologies

- React
- AI Integrations
- Payments
- Deployment

---

# 📸 Screenshots

Coming Soon...

---

# 🚀 Getting Started

## Prerequisites

- Node.js
- PostgreSQL
- pnpm

## Installation

### Backend

```bash
cd backend
pnpm install
pnpm dev
```

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

1. Fork the repository

2. Create your feature branch

3. Commit your changes

4. Push to your branch

5. Open a Pull Request

---

# 📢 Building in Public

Kallali is an open-source project that I'm building and documenting publicly.

The goal is not only to create a useful product but also to learn, share progress, and improve through community feedback.

Issues, suggestions, and contributions are always welcome.

---
# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support the Project

If you like this project, consider giving it a ⭐ on GitHub.

It motivates me to continue building Kallali in public.

---

**Built with ❤️ while learning, building in public, and supporting digital agriculture.**
