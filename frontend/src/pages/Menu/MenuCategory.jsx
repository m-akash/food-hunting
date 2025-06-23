import React from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 my-12">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            name={item.name}
            desc={item.desc}
            price={item.price}
          ></ItemCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <Link
          to={`/shop/${title}`}
          className="px-8 py-3 bg-blue-900 text-white rounded-lg font-medium 
          transition-all duration-300 hover:bg-neutral/90 hover:scale-105 
          shadow-lg hover:shadow-xl active:scale-95
          text-center w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          Order your favourite food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
