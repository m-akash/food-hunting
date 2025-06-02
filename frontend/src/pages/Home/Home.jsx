import React from "react";
import Banner from "../Banner/Banner";
import Categoty from "../Category/Categoty";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categoty></Categoty>
      <PopularMenu></PopularMenu>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
