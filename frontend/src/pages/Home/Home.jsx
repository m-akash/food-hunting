import React from "react";
import Banner from "../Banner/Banner";
import Categoty from "../Category/Categoty";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import Reviews from "../Reviews/Reviews";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HungerHub | Home</title>
      </Helmet>
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
