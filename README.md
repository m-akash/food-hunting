# HungerHub - Full Stack Restaurant Management System

A modern, full-stack restaurant management application built with **TypeScript**, React, and Node.js. Features user authentication, menu management, online ordering, payment processing, and comprehensive admin dashboard.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

### Customer Features

- **Secure Authentication** - Email/password and Google OAuth login
- **Responsive Design** - Optimized for all devices
- ** Menu Browsing** - Browse by categories with beautiful UI
- ** Shopping Cart** - Add/remove items with real-time updates
- ** Secure Payments** - Stripe integration for safe transactions
- ** Reviews & Ratings** - Share your dining experience
- ** Contact Support** - Easy communication with restaurant
- ** User Profile** - Manage personal information

### Admin Features

- ** Analytics Dashboard** - Sales statistics and user insights
- ** User Management** - View, promote, and manage users
- ** Menu Management** - Add, edit, and delete menu items
- ** Order Tracking** - Monitor and manage all orders
- ** Payment History** - Complete transaction records
- ** Sales Reports** - Detailed analytics and reporting

## Technology Stack

### Frontend (TypeScript)

- ** React 18** with Vite for lightning-fast development
- ** React Router v6** for seamless navigation
- ** Tailwind CSS + DaisyUI** for modern, responsive design
- ** Firebase** for authentication and real-time features
- ** Stripe** for secure payment processing
- ** TanStack Query** for efficient data fetching
- ** React Hook Form** for form validation
- ** SweetAlert2** for beautiful notifications
- ** React Helmet** for SEO optimization

### Backend (TypeScript)

- ** Node.js** with Express.js framework
- ** MongoDB** with Mongoose ODM
- ** JWT** for secure authentication
- ** Bcrypt** for password hashing
- ** Stripe** for payment processing
- ** Firebase Admin** for auth verification
- ** CORS** for cross-origin requests
- ** Multer** for file uploads

## Live Demo

- ** Live Application**: [HungerHub](https://hunger-hub-2908c.web.app/)
- ** Frontend Repository**: [GitHub Frontend](https://github.com/m-akash/food-hunting/tree/main/frontend)
- ** Backend Repository**: [GitHub Backend](https://github.com/m-akash/food-hunting/tree/main/backend)

## Demo Credentials

### Admin Access

- **Email**: `admin@gmail.com`
- **Password**: `Admin@01`

### Customer Access

- **Email**: `customer@gmail.com`
- **Password**: `Customer@01`

> **Tip**: You can also create your own account and test the full user experience!

## Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud)
- **Firebase** account
- **Stripe** account

### 1. Clone the Repository

```bash
git clone https://github.com/m-akash/food-hunting.git
cd food-hunting
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

### 3. Backend Setup

```bash
cd ../backend
npm install
```

### 4. Environment Configuration

#### Frontend Environment Variables

Create `.env` file in `frontend/` directory:

```env
# Firebase Configuration
VITE_apiKey=your-firebase-api-key
VITE_authDomain=your-firebase-auth-domain
VITE_projectId=your-firebase-project-id
VITE_storageBucket=your-storage-bucket
VITE_messagingSenderId=your-messaging-sender-id
VITE_appId=your-app-id

# Stripe Configuration
VITE_STRIPE_PK=your-stripe-public-key

# Image Hosting
VITE_IMGBB_API_KEY=your-imgbb-api-key
```

#### Backend Environment Variables

Create `.env` file in `backend/` directory:

```env
# Database
MONGODB_URI=your-mongodb-connection-string

# JWT
JWT_SECRET=your-jwt-secret-key

# Stripe
STRIPE_SK=your-stripe-secret-key

# Firebase Admin
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_PRIVATE_KEY=your-firebase-private-key
FIREBASE_CLIENT_EMAIL=your-firebase-client-email
```

### 5. Start Development Servers

#### Frontend (Port 5173)

```bash
cd frontend
npm run dev
```

#### Backend (Port 5000)

```bash
cd backend
npm start
```

## Project Structure

```
food-hunting/
├── frontend/                    # React TypeScript Frontend
│   ├── src/
│   │   ├── assets/             # Images and static files
│   │   ├── components/         # Reusable UI components
│   │   ├── context/            # React context providers
│   │   ├── firebase/           # Firebase configuration
│   │   ├── hooks/              # Custom React hooks
│   │   ├── Layout/             # Layout components
│   │   ├── pages/              # Page components
│   │   │   ├── Dashboard/      # Admin & user dashboard
│   │   │   └── shared/         # Shared components
│   │   ├── routes/             # Routing configuration
│   │   ├── types/              # TypeScript type definitions
│   │   ├── utils/              # Utility functions
│   │   ├── index.css           # Global styles
│   │   ├── main.tsx            # Application entry point
│   │   └── vite-env.d.ts       # Environment variables
│   ├── package.json
│   ├── tsconfig.json           # TypeScript configuration
│   ├── vite.config.js          # Vite configuration
│   └── index.html
│
└── backend/                     # Node.js TypeScript Backend
    ├── src/
    │   ├── config/             # Database and JWT config
    │   ├── controllers/        # Route controllers
    │   ├── middlewares/        # Custom middlewares
    │   ├── models/             # MongoDB models
    │   ├── routers/            # API routes
    │   ├── app.ts              # Express app setup
    │   └── index.ts            # Server entry point
    ├── package.json
    ├── tsconfig.json           # TypeScript configuration
    └── vercel.json             # Deployment configuration
```

## API Documentation

### Base URL

- **Development**: `http://localhost:5000`
- **Production**: `https://hunger-hub-backend.vercel.app`

### Authentication

All protected routes require JWT token in header:

```
Authorization: Bearer <your-jwt-token>
```

### Core Endpoints

#### User Management

| Method   | Endpoint                  | Auth      | Description       |
| -------- | ------------------------- | --------- | ----------------- |
| `GET`    | `/api/users`              | Admin+JWT | Get all users     |
| `POST`   | `/api/users/register`     | None      | Register new user |
| `POST`   | `/api/users/login`        | None      | User login        |
| `POST`   | `/api/users/social-login` | None      | Social login      |
| `PATCH`  | `/api/users/admin/:id`    | JWT       | Make user admin   |
| `DELETE` | `/api/users/:email`       | Admin+JWT | Delete user       |

#### Menu Management

| Method   | Endpoint        | Auth      | Description         |
| -------- | --------------- | --------- | ------------------- |
| `GET`    | `/api/menu`     | None      | Get all menu items  |
| `GET`    | `/api/menu/:id` | None      | Get menu item by ID |
| `POST`   | `/api/menu`     | Admin+JWT | Add new menu item   |
| `PATCH`  | `/api/menu/:id` | Admin+JWT | Update menu item    |
| `DELETE` | `/api/menu/:id` | Admin+JWT | Delete menu item    |

#### Cart Operations

| Method   | Endpoint         | Auth | Description      |
| -------- | ---------------- | ---- | ---------------- |
| `GET`    | `/api/carts`     | None | Get user cart    |
| `POST`   | `/api/carts`     | None | Add item to cart |
| `DELETE` | `/api/carts/:id` | None | Remove cart item |

#### Payment Processing

| Method | Endpoint                           | Auth | Description           |
| ------ | ---------------------------------- | ---- | --------------------- |
| `POST` | `/create-payment-intent`           | None | Create Stripe payment |
| `POST` | `/payments/payment`                | None | Record payment        |
| `GET`  | `/payments/payment-history/:email` | None | Get payment history   |

#### Reviews & Contact

| Method | Endpoint       | Auth | Description          |
| ------ | -------------- | ---- | -------------------- |
| `GET`  | `/api/review`  | None | Get all reviews      |
| `POST` | `/api/review`  | None | Add review           |
| `GET`  | `/api/contact` | None | Get contact messages |
| `POST` | `/api/contact` | None | Send contact message |

## Deployment

### Frontend (Vercel/Firebase)

```bash
cd frontend
npm run build
# Deploy dist/ folder to your hosting platform
```

### Backend (Vercel)

```bash
cd backend
npm run build
# Deploy to Vercel with vercel.json configuration
```

## 🧪 Testing

### Frontend

```bash
cd frontend
npm run test
```

### Backend

```bash
cd backend
npm test
```

## 👨‍💻 Author

**Mehedi Hasan Akash**

- GitHub: [@m-akash](https://github.com/m-akash)
- LinkedIn: [Mehedi Hasan Akash](https://www.linkedin.com/in/mehedi-hasan-akash/)
