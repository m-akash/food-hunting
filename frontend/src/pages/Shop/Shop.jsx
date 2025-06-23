import React, { useState } from "react";
import shopBg from "../../assets/shop/banner2.jpg";
import SharedBgImg from "../shared/SharedBgImg/SharedBgImg";
import useFoodMenu from "../../hooks/useFoodMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet-async";
import FoodCart from "./FoodCart";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = [
    "menu",
    "offered",
    "salad",
    "soup",
    "pizza",
    "dessert",
    "drinks",
  ];
  const { category } = useParams();
  const initialIndex = category ? categories.indexOf(category) : 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useFoodMenu();

  const offered = menu.filter((items) => items.category === "todays-offer");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");
  const drinks = menu.filter((items) => items.category === "drink");
  

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-amber-300">
      <Helmet>
        <title>HungerHub | Order Food</title>
      </Helmet>
      <SharedBgImg
        img={shopBg}
        title={"Our Shop"}
        subtitle={"Would you like to try a dish?"}
      ></SharedBgImg>

      <div className="container mx-auto px-4 py-12">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={handleTabSelect}
          className="flex flex-col items-center"
        >
          <TabList className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-gradient-to-r from-blue-900 to-amber-300 rounded-lg shadow-md">
            <Tab className="px-6 py-3 text-lg font-semibold text-black hover:text-primary cursor-pointer transition-colors duration-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              All
            </Tab>
            <Tab className="px-6 py-3 text-lg font-semibold text-black hover:text-primary cursor-pointer transition-colors duration-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Grab the Offer
            </Tab>
            <Tab className="px-6 py-3 text-lg font-semibold text-black hover:text-primary cursor-pointer transition-colors duration-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Salad
            </Tab>
            <Tab className="px-6 py-3 text-lg font-semibold text-black hover:text-primary cursor-pointer transition-colors duration-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Soup
            </Tab>
            <Tab className="px-6 py-3 text-lg font-semibold text-black hover:text-primary cursor-pointer transition-colors duration-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Pizza
            </Tab>
            <Tab className="px-6 py-3 text-lg font-semibold text-black hover:text-primary cursor-pointer transition-colors duration-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Dessert
            </Tab>
            <Tab className="px-6 py-3 text-lg font-semibold text-black hover:text-primary cursor-pointer transition-colors duration-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Drinks
            </Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {menu.map((item) => (
                <FoodCart key={item.id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {offered.map((item) => (
                <FoodCart key={item.id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {salad.map((item) => (
                <FoodCart key={item.id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {soup.map((item) => (
                <FoodCart key={item.id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {pizza.map((item) => (
                <FoodCart key={item.id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {dessert.map((item) => (
                <FoodCart key={item.id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {drinks.map((item) => (
                <FoodCart key={item.id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
