import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ItemCard from "../../components/ItemCard/ItemCard";

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
          <ItemCard
            image={item.image}
            name={item.name}
            desc={item.desc}
            price={item.price}
          ></ItemCard>
        ))}
      </div>

      <div className="text-center my-10">
        <button className="btn btn-soft btn-lg btn-primary">See More</button>
      </div>

      <div className="h-25 max-w-5xl mx-auto bg-black">
        <h1 className="text-3xl text-white text-center pt-8">Call Us: 01676543210</h1>
      </div>
    </section>
  );
};

export default PopularMenu;
