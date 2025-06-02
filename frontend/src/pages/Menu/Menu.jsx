import React from "react";
import { Helmet } from "react-helmet-async";
import bgMenu from "../../assets/menu/banner3.jpg";
import SharedBgImg from "../shared/SharedBgImg/SharedBgImg";
import ItemCard from "../../components/ItemCard/ItemCard";
import PopularMenu from "../PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>HungerHub | Menu</title>
      </Helmet>
      <SharedBgImg
        img={bgMenu}
        title={"Our Menu"}
        subtitle={"Would you like to try a dish?"}
      ></SharedBgImg>

      <PopularMenu></PopularMenu>

      <SharedBgImg
        img={bgMenu}
        title={"Our Menu"}
        subtitle={"Would you like to try a dish?"}
      ></SharedBgImg>

      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
