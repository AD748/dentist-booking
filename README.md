# 🦷 Dentist Appointment Booking Platform

A full-stack MERN application that allows users to browse dentists and book appointments, with an admin dashboard to manage bookings.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Context API (Custom Toast)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## ✨ Features

### 👤 User
- View list of dentists
- Search dentists by name/location
- Book appointments
- Form validation
- Responsive UI
- Pagination
- Toast notifications

### 🧑‍💼 Admin
- Secure login (JWT-based)
- View all appointments
- Protected routes

---

## 🏗️ Architecture
# 🦷 Dentist Appointment Booking Platform

A full-stack MERN application that allows users to browse dentists and book appointments, with an admin dashboard to manage bookings.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Context API (Custom Toast)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## ✨ Features

### 👤 User
- View list of dentists
- Search dentists by name/location
- Book appointments
- Form validation
- Responsive UI
- Pagination
- Toast notifications

### 🧑‍💼 Admin
- Secure login (JWT-based)
- View all appointments
- Protected routes

---

## 🏗️ Architecture

```
client (React + Tailwind)
↓
REST API (Node + Express)
↓
MongoDB (Mongoose)
```


---

## 📂 Project Structure

```
dentist-booking/
│
├── client/ # Frontend (React)
├── server/ # Backend (Node + Express)

```


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd dentist-booking
```

---

### 2️⃣ Backend Setup
```bash
cd server
npm install
```
Create `.env` file:
```bash
MONGO_URI=<your-mongo-uri>
JWT_SECRET=your_secret_key
PORT=5000 || any port of your choice
```
Create admin
```bash
node createAdmin.js # Run only once
```
Push dentists into DB:
```bash
node seedDentists.js # Run only once
```
Run backend:

```bash
node server.js
```


---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
```


Create `.env`:
```
VITE_BASE_URL=http://localhost:{backend_port}/api
```

Run frontend:
```bash
npm run dev
```

---

## 🔐 Admin Credentials
Email: admin@gmail.com

Password: admin123


---

## 🧪 API Endpoints

### Dentist APIs
- GET `/api/dentists`
- POST `/api/dentists`

### Appointment APIs
- POST `/api/appointments`
- GET `/api/appointments` (Protected)

### Auth APIs
- POST `/api/auth/login`

---

## 🌟 Bonus Features Implemented

- Custom Toast System (No external dependency)
- Form Validation
- Search & Filtering
- Pagination
- JWT Authentication

---

## 🚀 Deployment

Frontend → Vercel  
Backend → Render  
Database → MongoDB Atlas  

---

## 📌 Future Improvements

- Appointment status update
- Time slot booking
- Admin dashboard enhancements
- Email notifications

---

## 👨‍💻 Author

Aniket Datta