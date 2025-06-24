# Food Hunting - Full Stack Restaurant Application

A modern, full-stack restaurant management application built with React and Node.js, featuring user authentication, menu management, online ordering, and payment processing.

## Features

### Customer Features

- User authentication with email/password and social login
- Browse restaurant menu with categories
- Shopping cart functionality
- Secure payment processing with Stripe
- Leave reviews and ratings
- Responsive design for all devices
- Contact form for customer inquiries

### Admin Features

- Dashboard with statistics and analytics
- User management system
- Menu item management (Add, Update, Delete)
- Order tracking and management
- Payment history tracking
- Sales statistics and reporting

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

## Demo

- **Live**: https://hunger-hub-2908c.web.app/
- **Frontend code**: https://github.com/m-akash/food-hunting/tree/main/frontend
- **Backend code**: https://github.com/m-akash/food-hunting/tree/main/backend

## Login Credentials

### Admin

- **Email**: admin@gmail.com
- **Password**: Admin@01

### Customer

- **Email**: customer@gmail.com
- **Password**: Customer@01

- **Or you can try with your created personal creditials**

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Firebase account
- Stripe account

### Installation

1. Clone the repository

```bash
git clone https://github.com/m-akash/food-hunting.git

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
npm init
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
npm start
```

## Project Structure

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

## API Documentation

### Base URL

- For local development: `http://localhost:<PORT>`
- All API endpoints are prefixed as shown below.

---

### Authentication & JWT

- Obtain a JWT token via `POST /jwt` with user credentials in the body.
- Use the token in the `Authorization: Bearer <token>` header for protected routes.

---

### User APIs (`/api/users`)

| Method | Endpoint                  | Auth      | Description                       |
| ------ | ------------------------- | --------- | --------------------------------- |
| GET    | `/api/users/`             | Admin+JWT | Get all users                     |
| POST   | `/api/users/register`     | None      | Register a new user               |
| POST   | `/api/users/login`        | None      | Login with email/password         |
| POST   | `/api/users/social-login` | None      | Social login                      |
| PATCH  | `/api/users/admin/:id`    | JWT       | Make a user admin (by user ID)    |
| GET    | `/api/users/admin/:email` | JWT       | Check if user is admin (by email) |
| DELETE | `/api/users/:email`       | Admin+JWT | Delete a user (by email)          |

---

### Menu APIs (`/api/menu`)

| Method | Endpoint        | Auth      | Description              |
| ------ | --------------- | --------- | ------------------------ |
| GET    | `/api/menu/`    | None      | Get all menu items       |
| GET    | `/api/menu/:id` | None      | Get a menu item by ID    |
| POST   | `/api/menu/`    | Admin+JWT | Add a new menu item      |
| PATCH  | `/api/menu/:id` | Admin+JWT | Update a menu item by ID |
| DELETE | `/api/menu/:id` | Admin+JWT | Delete a menu item by ID |

---

### Cart APIs (`/api/carts`)

| Method | Endpoint         | Auth | Description                           |
| ------ | ---------------- | ---- | ------------------------------------- |
| GET    | `/api/carts/`    | None | Get all cart items (likely by user)   |
| POST   | `/api/carts/`    | None | Add item to cart                      |
| DELETE | `/api/carts/:id` | None | Remove item from cart by cart item ID |

---

### Payment APIs (`/payments`)

| Method | Endpoint                           | Auth | Description                               |
| ------ | ---------------------------------- | ---- | ----------------------------------------- |
| GET    | `/payments/payment-history/:email` | None | Get payment history for a user (by email) |
| POST   | `/payments/payment`                | None | Create a payment record                   |

#### Stripe Payment Intent

| Method | Endpoint                 | Auth | Description                                               |
| ------ | ------------------------ | ---- | --------------------------------------------------------- |
| POST   | `/create-payment-intent` | None | Create a Stripe payment intent (send `{ price }` in body) |

---

### Review APIs (`/api/review`)

| Method | Endpoint       | Auth | Description      |
| ------ | -------------- | ---- | ---------------- |
| GET    | `/api/review/` | None | Get all reviews  |
| POST   | `/api/review/` | None | Add a new review |

---

### Contact APIs (`/api/contact`)

| Method | Endpoint        | Auth | Description                |
| ------ | --------------- | ---- | -------------------------- |
| GET    | `/api/contact/` | None | Get all contact messages   |
| POST   | `/api/contact/` | None | Send a new contact message |

---

### Admin Stats API (`/admin-stats`)

| Method | Endpoint        | Auth      | Description                    |
| ------ | --------------- | --------- | ------------------------------ |
| GET    | `/admin-stats/` | Admin+JWT | Get admin dashboard statistics |

---

### Other Endpoints

| Method | Endpoint | Auth | Description                            |
| ------ | -------- | ---- | -------------------------------------- |
| GET    | `/`      | None | Health check (returns "hello")         |
| POST   | `/jwt`   | None | Get JWT token (send user info in body) |

---

### Error Handling

- 404: Any undefined route returns `{ message: "route not found!" }`
- 500: Server errors return `{ message: "something broke!" }`

---

#### Notes

- `Admin+JWT` means the endpoint requires a valid JWT and the user must be an admin.
- For protected endpoints, include the JWT in the `Authorization` header as `Bearer <token>`.
- Some endpoints may expect specific request body formats (e.g., user registration, payment intent).

## Security Features

- JWT-based authentication
- Password hashing with Bcrypt
- Secure payment processing with Stripe
- Protected API routes
- Admin middleware for authorized access
- Firebase authentication integration

## Feedback

- If you have any feedback, please reach out to [mehedihasan1769@gmail.com](mailto:mehedihasan1769@gmail.com)

## Authors

- [Mehedi Hasan Akash](https://github.com/m-akash)
