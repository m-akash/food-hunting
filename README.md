# Food Hunting - Full Stack Restaurant Application 🍽️

A modern, full-stack restaurant management application built with React and Node.js, featuring user authentication, menu management, online ordering, and payment processing.

## Features

### Customer Features

- 🔐 User authentication with email/password and social login
- 🍽️ Browse restaurant menu with categories
- 🛒 Shopping cart functionality
- 💳 Secure payment processing with Stripe
- ⭐ Leave reviews and ratings
- 📱 Responsive design for all devices
- 📞 Contact form for customer inquiries

### Admin Features

- 📊 Dashboard with statistics and analytics
- 👥 User management system
- 🍳 Menu item management (Add, Update, Delete)
- 📦 Order tracking and management
- 💰 Payment history tracking
- 📈 Sales statistics and reporting

## Technology Stack

### Frontend

- **React** with Vite for fast development
- **React Router** for navigation
- **TanStack Query** for data fetching
- **Tailwind CSS** & **DaisyUI** for styling
- **Firebase** for authentication
- **Stripe** for payment processing
- **Axios** for API requests
- **React Hook Form** for form handling
- **SweetAlert2** & **React Hot Toast** for notifications
- **React Parallax** & **Swiper** for animations

### Backend

- **Node.js** & **Express.js**
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Stripe** for payment processing
- **Firebase Admin** for auth verification
- **CORS** for cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Firebase account
- Stripe account

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd food-hunting
```

2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

4. Set up environment variables:

Create `.env` files in both frontend and backend directories:

Frontend `.env`:

```env
VITE_apiKey=your-firebase-api-key
VITE_authDomain=your-firebase-auth-domain
VITE_projectId=your-firebase-project-id
VITE_storageBucket=your-storage-bucket
VITE_messagingSenderId=your-messaging-sender-id
VITE_appId=your-app-id
VITE_STRIPE_PK=your-stripe-public-key
```

Backend `.env`:

```env
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
STRIPE_SK=your-stripe-secret-key
```

5. Start the development servers:

Frontend:

```bash
cd frontend
npm run dev
```

Backend:

```bash
cd backend
npm init
npm start
```

## 📁 Project Structure

```
food-hunting/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/     # Page components
│   │   ├── context/   # Context providers
│   │   ├── hooks/     # Custom hooks
│   │   └── utils/     # Utility functions
│   └── public/        # Static assets
└── backend/           # Node.js backend application
    ├── controllers/   # Route controllers
    ├── models/       # Database models
    ├── routes/       # API routes
    ├── config/       # Configuration files
    └── middlewares/  # Custom middlewares
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with Bcrypt
- Secure payment processing with Stripe
- Protected API routes
- Admin middleware for authorized access
- Firebase authentication integration

## 👥 Authors

- Mehedi Hasan Akash

