import React from "react";

const ItemCard = ({ name, image, desc, price }) => {
  return (
    <div className="flex items-center gap-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-900 to-amber-300">
      <figure className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
        <img src={image} alt="Menu Item" className="w-16 h-16 object-contain" />
      </figure>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-lg font-bold text-orange-700">${price}</p>
        </div>
        <p className="text-gray-100">{desc}</p>
      </div>
    </div>
  );
};

export default ItemCard;
