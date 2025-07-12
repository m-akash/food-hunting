export interface User {
  id: string;
  name: string;
  displayName?: string;
  email: string;
  password?: string;
  photoURL?: string;
  createdAt: Date;
  lastLogin?: Date;
  role: 'user' | 'admin';
}

export interface MenuItem {
  id: string;
  name: string;
  desc: string;
  image: string;
  category: string;
  price: number;
  recipe?: string;
}

export interface CartItem {
  id: string;
  itemId: string;
  userEmail: string;
  foodName: string;
  foodImg: string;
  foodCategory: string;
  price: number;
}

export interface Review {
  id: string;
  name: string;
  details: string;
  rating: number;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
}

export interface Payment {
  id: string;
  email: string;
  totalPrice: number;
  transactionId: string;
  date: Date;
  cartId: string[];
  menuItemId: string[];
  status: 'pending' | 'success';
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string, name: string) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
}

export interface ChildrenProps {
  children: React.ReactNode;
} 