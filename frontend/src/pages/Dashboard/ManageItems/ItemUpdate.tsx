import React from "react";
import { useForm } from "react-hook-form";
import {
  FaUtensils,
  FaDollarSign,
  FaListUl,
  FaFileAlt,
  FaImage,
  FaUpload,
  FaEdit,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { showErrorAlert, showSuccessAlert } from "../../../utils/alertUtils";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const ItemUpdate = () => {
  const item = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: item.name,
      price: item.price,
      category: item.category,
      image: item.image,
      desc: item.desc,
      recipe: null,
    },
  });

  const onSubmit = async (data: any) => {
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
          recipe: data.recipe,
        };
        const menu = await axiosSecure.patch(`/api/menu/${item.id}`, menuItem);
        if (menu.data.modifiedCount > 0) {
          showSuccessAlert(`${data.name} updated successfully!`);
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
    <div className="min-h-screen  flex items-center justify-center py-8">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4 shadow-lg">
            <FaEdit className="text-2xl text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Update Menu Item
          </h1>
          <p className="text-base text-gray-900">
            Edit the details below to update this menu item.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group">
              <label className="flex text-sm font-semibold text-gray-900 mb-2 items-center">
                <FaUtensils className="w-4 h-4 mr-2 text-yellow-400" />
                Food Name *
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-900 placeholder-gray-300"
                placeholder="Enter food name"
              />
            </div>
            <div className="group">
              <label className="flex text-sm font-semibold text-gray-900 mb-2 items-center">
                <FaDollarSign className="w-4 h-4 mr-2 text-yellow-400" />
                Price *
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                {...register("price", { required: true })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-900 placeholder-gray-300"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="group">
            <label className="flex text-sm font-semibold text-gray-900 mb-2 items-center">
              <FaListUl className="w-4 h-4 mr-2 text-yellow-400" />
              Category *
            </label>
            <select
              {...register("category", { required: true })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-900"
            >
              <option value="">Select a category</option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
              <option value="todays-offer">Todays-Offer</option>
              <option value="popular">Popular</option>
            </select>
          </div>
          <div className="group">
            <label className="flex text-sm font-semibold text-gray-900 mb-2 items-center">
              <FaFileAlt className="w-4 h-4 mr-2 text-yellow-400" />
              Description *
            </label>
            <textarea
              {...register("desc", { required: true })}
              rows={3}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-900 placeholder-gray-300"
              placeholder="Describe your delicious dish..."
            />
          </div>
          <div className="group">
            <label className="flex text-sm font-semibold text-gray-900 mb-2 items-center">
              <FaImage className="w-4 h-4 mr-2 text-yellow-400" />
              Food Image *
            </label>
            <input
              {...register("image")}
              type="file"
              accept="image/*"
              className="w-full text-gray-900"
            />
          </div>
          <div className="group">
            <label className="flex text-sm font-semibold text-gray-900 mb-2 items-center">
              <FaFileAlt className="w-4 h-4 mr-2 text-yellow-400" />
              Recipe{" "}
              <span className="ml-2 text-xs text-gray-900">(Optional)</span>
            </label>
            <textarea
              {...register("recipe")}
              rows={2}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-900 placeholder-gray-600"
              placeholder="Brief recipe or cooking instructions..."
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 text-gray-900 py-3 px-6 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaEdit className="w-5 h-5" />
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemUpdate;
