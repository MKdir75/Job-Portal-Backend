# Job Portal Backend

A backend service for a job portal application built with **Node.js**, **Express**, **MongoDB**, and **TypeScript**.  
It provides authentication, job management, and role-based access control for candidates and recruiters.

---

## 🚀 Features
- User registration & login (JWT authentication)
- Role-based access (Candidate / Recruiter)
- Job posting, updating, and deletion
- Candidate job applications
- Secure password hashing with bcrypt
- MongoDB database connection with Mongoose
- CORS enabled for frontend integration

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MKdir75/Job-Portal-Backend.git
cd job-portal-backend
npm install


⚙️ Environment Variables
    PORT=5000
    MONGO_URI=mongodb+srv://miltonhossain5864_db_user:V8rpGGzoLXQSKFHJ@cluster0.hc17nfh.mongodb.net/Job-Portal?retryWrites=true&  w=majority
    JWT_SECRET=3f9a8c7d2e4b5a6f7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b


▶️ Running the Server
    npm run dev

For production build:
    npm run build
    npm start

🛠️ Tech Stack
    // Node.js
    // Express
    // MongoDB
    // TypeScript
    // Socket.io (optional for real-time features)