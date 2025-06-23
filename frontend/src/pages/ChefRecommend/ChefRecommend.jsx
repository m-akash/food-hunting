import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useFoodMenu from "../../hooks/useFoodMenu";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { showErrorAlert, showSuccessAlert } from "../../utils/alertUtils";

const ChefRecommend = () => {
  const [menu] = useFoodMenu();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const chefSpec = menu.filter((item) => item.category === "special");

  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuItemId: item.id,
        userEmail: user.email,
        foodName: item.name,
        foodImg: item.image,
        foodCategory: item.category,
        price: item.price,
      };
      axiosSecure
        .post("/api/carts", cartItem)
        .then(() => {
          showSuccessAlert("Item added to cart!");
          refetch();
        })
        .catch(() => {
          showErrorAlert("Failed to add item to cart. Please try again.");
        });
    } else {
      showErrorAlert("Please login to add items to cart");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-blue-900 to-amber-300">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subHeading={"Should Try"}
          heading={"RECOMMENDED"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {chefSpec.map((item) => (
            <div
              key={item.id}
              className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden"
            >
              <figure className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt="image"
                  className="w-full h-[250px] md:h-[300px] object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">
                    ${item.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-primary hover:btn-secondary transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefRecommend;
