# DigiSchool - School Management System

A Node.js/Express REST API for managing schools, students, teachers, classes, subjects, and grades.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Generate Prisma Client
npx prisma generate

# 3. Configure environment variables
# Copy .env.example to .env and update with your MongoDB connection string

# 5. Start the server
npm start

# 6. To access the swagger
http://localhost:8080/api-docs/
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="mongodb://username:password@host:27017/digischools?authSource=admin"
```


## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Prisma ORM v6.19** - Database ORM with MongoDB support
- **MongoDB** - NoSQL database


## 📁 Project Structure

```
digischool/
├── src/
│   ├── controllers/       # Request handlers
│   ├── services/          # Business logic
│   ├── repositories/      # Database operations (Prisma)
│   ├── routes/            # API routes
│   ├── generated/         # Prisma generated client (auto-generated)
│   └── index.js           # Application entry point
├── prisma/
│   └── schema.prisma      # Database schema definition
├── .env                   # Environment variables (not in git)
├── .gitignore
├── package.json
└── README.md
```

