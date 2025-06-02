import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featureImg from "../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item my-15">
      <div className="featured-content">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"From our Menu"}
        ></SectionTitle>

        <div className="md:flex justify-center items-center gap-8">
          <div className="flex-1">
            <img
              src={featureImg}
              alt="Featured dish"
              className="featured-image"
            />
          </div>

          <div className="featured-text flex-1">
            <p className="featured-date">Aug 20, 2027</p>
            <h2 className="text-3xl font-semibold mb-4">
              Where can i get some?
            </h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="featured-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
