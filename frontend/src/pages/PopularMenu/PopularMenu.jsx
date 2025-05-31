import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import img from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";

const PopularMenu = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle subHeading={"Check it out"} heading={"From Our Menu"} />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Menu Item 1 */}
        <div className="flex items-center gap-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
          <figure className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={img}
              alt="Menu Item"
              className="w-16 h-16 object-contain"
            />
          </figure>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Bistro Burger
              </h3>
              <p className="text-lg font-bold text-orange-500">$12.99</p>
            </div>
            <p className="text-gray-600">
              Juicy beef patty with fresh vegetables and special sauce
            </p>
          </div>
        </div>

        {/* Menu Item 2 */}
        <div className="flex items-center gap-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
          <figure className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={img}
              alt="Menu Item"
              className="w-16 h-16 object-contain"
            />
          </figure>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Margherita Pizza
              </h3>
              <p className="text-lg font-bold text-orange-500">$14.99</p>
            </div>
            <p className="text-gray-600">
              Classic pizza with fresh tomatoes, mozzarella, and basil
            </p>
          </div>
        </div>

        {/* Menu Item 3 */}
        <div className="flex items-center gap-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
          <figure className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={img}
              alt="Menu Item"
              className="w-16 h-16 object-contain"
            />
          </figure>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Caesar Salad
              </h3>
              <p className="text-lg font-bold text-orange-500">$9.99</p>
            </div>
            <p className="text-gray-600">
              Fresh romaine lettuce with parmesan and croutons
            </p>
          </div>
        </div>

        {/* Menu Item 4 */}
        <div className="flex items-center gap-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
          <figure className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={img}
              alt="Menu Item"
              className="w-16 h-16 object-contain"
            />
          </figure>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Pasta Carbonara
              </h3>
              <p className="text-lg font-bold text-orange-500">$13.99</p>
            </div>
            <p className="text-gray-600">
              Creamy pasta with bacon and parmesan cheese
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
