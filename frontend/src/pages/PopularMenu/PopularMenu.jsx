import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menu/")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle subHeading={"Check it out"} heading={"From Our Menu"} />
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {menu.slice(0, 6).map((item) => (
          <div className="flex items-center gap-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <figure className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={item.image}
                alt="Menu Item"
                className="w-16 h-16 object-contain"
              />
            </figure>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-lg font-bold text-orange-500">
                  {item.price}
                </p>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="btn btn-soft btn-lg btn-primary">See More</button>
      </div>
    </section>
  );
};

export default PopularMenu;
