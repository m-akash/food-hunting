import React from "react";
import ItemCard from "../../components/ItemCard/ItemCard";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 my-12">
        {items.map((item) => (
          <ItemCard
            image={item.image}
            name={item.name}
            desc={item.desc}
            price={item.price}
          ></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
