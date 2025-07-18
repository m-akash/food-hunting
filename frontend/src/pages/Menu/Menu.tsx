import { Helmet } from "react-helmet-async";
import bgMenu from "../../assets/menu/banner3.jpg";
import bgDessert from "../../assets/menu/dessert-bg.jpeg";
import bgPizza from "../../assets/menu/pizza-bg.jpg";
import bgSalad from "../../assets/menu/salad-bg.jpg";
import bgSoup from "../../assets/menu/soup-bg.jpg";
import SharedBgImg from "../shared/SharedBgImg/SharedBgImg";
import useFoodMenu from "../../hooks/useFoodMenu";
import MenuCategory from "./MenuCategory";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MenuItem } from "../../types";

const Menu = () => {
  const [menu] = useFoodMenu();
  const offered = menu.filter((items: MenuItem) => items.category === "todays-offer");
  const dessert = menu.filter((items: MenuItem) => items.category === "dessert");
  const pizza = menu.filter((items: MenuItem) => items.category === "pizza");
  const salad = menu.filter((items: MenuItem) => items.category === "salad");
  const soup = menu.filter((items: MenuItem) => items.category === "soup");

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-amber-300">
      <Helmet>
        <title>HungerHub | Menu</title>
      </Helmet>

      <SharedBgImg
        img={bgMenu}
        title={"Our Menu"}
        subtitle={"Would you like to try a dish?"}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <SectionTitle subHeading={"Don't miss"} heading={"Todays Offer"} />
        </div>
        <div className="mb-24">
          <MenuCategory items={offered} title="offered" />
        </div>

        <div className="mb-24">
          <SharedBgImg
            img={bgDessert}
            title={"Dessert"}
            subtitle={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, commodi praesentium molestias nobis vel explicabo!"
            }
          />
          <div className="mt-12">
            <MenuCategory items={dessert} title="dessert" />
          </div>
        </div>

        <div className="mb-24">
          <SharedBgImg
            img={bgPizza}
            title={"Pizza"}
            subtitle={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, commodi praesentium molestias nobis vel explicabo!"
            }
          />
          <div className="mt-12">
            <MenuCategory items={pizza} title="pizza" />
          </div>
        </div>

        <div className="mb-24">
          <SharedBgImg
            img={bgSalad}
            title={"Salad"}
            subtitle={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, commodi praesentium molestias nobis vel explicabo!"
            }
          />
          <div className="mt-12">
            <MenuCategory items={salad} title="salad" />
          </div>
        </div>

        <div className="mb-24">
          <SharedBgImg
            img={bgSoup}
            title={"Soup"}
            subtitle={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, commodi praesentium molestias nobis vel explicabo!"
            }
          />
          <div className="mt-12">
            <MenuCategory items={soup} title="soup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
