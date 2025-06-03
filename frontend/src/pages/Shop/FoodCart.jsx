import React from "react";

const FoodCart = ({ item }) => {
  return (
    <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden">
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
        <h2 className="card-title text-2xl font-bold text-gray-800 mb-3">
          {item.name}
        </h2>
        <p className="text-gray-600 mb-6 line-clamp-2">{item.desc}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">${item.price}</span>
          <button className="btn btn-primary hover:btn-secondary transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
