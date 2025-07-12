import React from "react";

interface ItemCardProps {
  name: string;
  image: string;
  desc: string;
  price: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, image, desc, price }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl shadow-xl bg-white/60 backdrop-blur-md border border-white/40 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 min-h-[140px] w-full">
      <figure className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-gradient-to-tr from-blue-100 to-blue-200 flex items-center justify-center shadow-lg border-4 border-white/70 mb-3 md:mb-0">
        <img
          src={image}
          alt="Menu Item"
          className="w-16 h-16 md:w-24 md:h-24 object-cover"
        />
      </figure>
      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-1 gap-1 md:gap-0">
          <h3 className="text-base md:text-2xl font-bold text-gray-900 drop-shadow-sm tracking-tight text-center md:text-left">
            {name}
          </h3>
          <span className="text-sm md:text-xl font-extrabold text-blue-600 bg-blue-100 px-3 py-1 rounded-lg shadow-sm mt-1 md:mt-0">
            ${price}
          </span>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-blue-200 via-blue-100 to-transparent my-2 rounded-full" />
        <p className="text-gray-700 text-xs md:text-base leading-relaxed font-medium text-center md:text-left">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
