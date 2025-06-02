import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import img1 from "../../assets/home/slide1.jpg";

const ChefRecommend = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subHeading={"Should Try"}
          heading={"Chef Recommends"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden">
            <figure className="relative overflow-hidden">
              <img
                src={img1}
                alt="Salad"
                className="w-full h-[250px] md:h-[300px] object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">
                Caeser Salad
              </h2>
              <p className="text-gray-600 mb-4">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">$12.99</span>
                <button className="btn btn-primary hover:btn-secondary transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden">
            <figure className="relative overflow-hidden">
              <img
                src={img1}
                alt="Salad"
                className="w-full h-[250px] md:h-[300px] object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                New
              </div>
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">
                Caeser Salad
              </h2>
              <p className="text-gray-600 mb-4">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">$12.99</span>
                <button className="btn btn-primary hover:btn-secondary transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden">
            <figure className="relative overflow-hidden">
              <img
                src={img1}
                alt="Salad"
                className="w-full h-[250px] md:h-[300px] object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Special
              </div>
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">
                Caeser Salad
              </h2>
              <p className="text-gray-600 mb-4">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">$12.99</span>
                <button className="btn btn-primary hover:btn-secondary transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommend;
