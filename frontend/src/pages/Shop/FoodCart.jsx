import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        cartId: item.id,
        userEmail: user.email,
        foodName: item.name,
        foodCategory: item.category,
        price: item.price,
      };
      axiosSecure.post("/api/carts", cartItem).then(() => {
        refetch();
      });
    } else {
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card bg-gradient-to-r from-blue-900 to-amber-300 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden">
      <figure className="relative overflow-hidden group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[250px] md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {item.category}
        </div>
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-bold text-gray-50 mb-3">
          {item.name}
        </h2>
        <p className="text-gray-100 mb-6 line-clamp-2">{item.desc}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white">${item.price}</span>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary hover:btn-secondary transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
