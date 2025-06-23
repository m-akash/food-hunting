import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import {
  FaUtensils,
  FaDollarSign,
  FaListUl,
  FaFileAlt,
  FaImage,
  FaPlus,
  FaUpload,
} from "react-icons/fa";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { showSuccessAlert, showErrorAlert } from "../../../utils/alertUtils";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(img_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        const menuItem = {
          name: data.name,
          desc: data.desc,
          image: res.data.data.display_url,
          category: data.category,
          price: parseFloat(data.price),
        };
        const menu = await axiosSecure.post("/api/menu", menuItem);
        if (menu.data.insertedId) {
          reset();
          showSuccessAlert("Menu item added successfully!");
        }
      } else {
        showErrorAlert("Image upload failed. Please try again.");
      }
      console.log(res.data);
    } catch (error) {
      showErrorAlert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Helmet>
        <title>HungerHub | Add New Item</title>
      </Helmet>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 md:mb-6 shadow-lg">
              <FaPlus className="text-2xl md:text-3xl text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">
              Add New Menu Item
            </h1>
            <p className="text-base md:text-lg text-gray-900 max-w-2xl mx-auto px-4">
              Create a delicious new dish for your customers. Fill in the
              details below to add it to your menu.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 xl:p-10 border border-white/20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="group">
                  <label className="flex text-sm font-semibold text-gray-900 mb-3 items-center">
                    <FaUtensils className="w-4 h-4 mr-2 text-yellow-400" />
                    Food Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-900 placeholder-gray-900 backdrop-blur-sm group-hover:bg-white/15"
                      placeholder="Enter food name"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="group">
                  <label className="flex text-sm font-semibold text-gray-900 mb-3 items-center">
                    <FaDollarSign className="w-4 h-4 mr-2 text-yellow-400" />
                    Price *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      {...register("price", { required: true })}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-900 placeholder-gray-900 backdrop-blur-sm group-hover:bg-white/15"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="flex text-sm font-semibold text-gray-900 mb-3 items-center">
                  <FaListUl className="w-4 h-4 mr-2 text-yellow-400" />
                  Category *
                </label>
                <div className="relative">
                  <select
                    {...register("category", { required: true })}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-900 text-gray-900 backdrop-blur-sm group-hover:bg-white/15 appearance-none"
                  >
                    <option value="" className="text-gray-700">
                      Select a category
                    </option>
                    <option value="salad" className="text-gray-700">
                      Salad
                    </option>
                    <option value="pizza" className="text-gray-700">
                      Pizza
                    </option>
                    <option value="soup" className="text-gray-700">
                      Soup
                    </option>
                    <option value="dessert" className="text-gray-700">
                      Dessert
                    </option>
                    <option value="drinks" className="text-gray-700">
                      Drinks
                    </option>
                    <option value="todays-offer" className="text-gray-700">
                      Todays-Offer
                    </option>
                    <option value="popular" className="text-gray-700">
                      Popular
                    </option>
                  </select>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="flex text-sm font-semibold text-gray-900 mb-3 items-center">
                  <FaFileAlt className="w-4 h-4 mr-2 text-yellow-400" />
                  Description *
                  <span className="ml-2 text-xs text-gray-900">(Optional)</span>
                </label>
                <div className="relative">
                  <textarea
                    {...register("desc", { required: true })}
                    rows="4"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-900 placeholder-gray-900 backdrop-blur-sm group-hover:bg-white/15 resize-none"
                    placeholder="Describe your delicious dish..."
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="group">
                <label className="flex text-sm font-semibold text-gray-900 mb-3 items-center">
                  <FaImage className="w-4 h-4 mr-2 text-yellow-400" />
                  Food Image *
                </label>
                <div className="relative">
                  <input
                    {...register("image", { required: true })}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="w-full px-4 py-8 bg-white/10 border-2 border-dashed border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-900 backdrop-blur-sm group-hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center hover:border-yellow-400/50"
                  >
                    <FaUpload className="w-8 h-8 mr-2 text-yellow-400 mb-2" />
                    <span className="text-center">
                      <span className="block font-medium">
                        Choose an image or drag & drop
                      </span>
                      <span className="block text-sm text-gray-900 mt-1">
                        PNG, JPG, GIF up to 5MB
                      </span>
                    </span>
                  </label>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="group">
                <label className="flex text-sm font-semibold text-gray-900 mb-3 items-center">
                  <FaFileAlt className="w-4 h-4 mr-2 text-yellow-400" />
                  Recipe
                  <span className="ml-2 text-xs text-gray-900">(Optional)</span>
                </label>
                <div className="relative">
                  <textarea
                    {...register("recipe")}
                    rows="3"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-900 placeholder-gray-700 backdrop-blur-sm group-hover:bg-white/15 resize-none"
                    placeholder="Brief recipe or cooking instructions..."
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-xl hover:from-yellow-500 hover:via-orange-500 hover:to-pink-600"
                >
                  <span className="flex items-center justify-center">
                    <FaPlus className="w-5 h-5 mr-2" />
                    Add Menu Item
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
