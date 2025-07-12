import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Payment } from "../../../types";

const UserHome = () => {
  const [cart] = useCart();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState<Payment[]>([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/payments/payment-history/${user.email}`).then((res) => {
        setOrders(res.data);
      });
    }
  }, [axiosSecure, user?.email]);

  return (
    <div className="p-6 min-h-[80vh] text-black bg-gray-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">
        Welcome, <span className="text-primary">{user?.displayName || user?.name}</span>!
      </h1>
      <p className="text-gray-600 mb-8">
        Here's a quick look at your dashboard.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🍽️</span>
          <h2 className="text-xl font-semibold mb-1">Recent Orders</h2>
          <p className="text-2xl font-bold text-primary">{orders.length}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🛒</span>
          <h2 className="text-xl font-semibold mb-1">Items in Cart</h2>
          <p className="text-2xl font-bold text-primary">{cart.length}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">⚡</span>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <div className="flex flex-col gap-2 w-full">
            <a href="/menu" className="text-primary hover:underline">
              View Menu
            </a>
            <a href="/dashboard/cart" className="text-primary hover:underline">
              Go to Cart
            </a>
            <a href="/profile" className="text-primary hover:underline">
              Update Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
