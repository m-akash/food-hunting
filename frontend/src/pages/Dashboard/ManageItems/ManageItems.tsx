import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  showSuccessAlert,
  showErrorAlert,
  showLoadingAlert,
  closeLoadingAlert,
  showConfirmationDialog,
} from "../../../utils/alertUtils";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (itemId: string) => {
    showConfirmationDialog(
      "Delete Item",
      "Are you sure you want to delete this menu item?"
    ).then((result) => {
      if (result.isConfirmed) {
        showLoadingAlert("Deleting item...");
        axiosSecure
          .delete(`/api/menu/${itemId}`)
          .then(() => {
            closeLoadingAlert();
            showSuccessAlert("Menu item deleted successfully!");
            refetch();
          })
          .catch(() => {
            closeLoadingAlert();
            showErrorAlert("Failed to delete menu item. Please try again.");
          });
      }
    });
  };
  return (
    <div className="w-full p-4 text-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Manage Menu Items
      </h2>
      {/* Table view for md+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full min-w-[600px] bg-white shadow-lg rounded-lg">
          <thead className="bg-gradient-to-r text-black from-orange-200 to-yellow-100">
            <tr>
              <th className="py-3 px-2 text-left">#</th>
              <th className="py-3 px-2 text-left">Food Image & Name</th>
              <th className="py-3 px-2 text-left">Food Description</th>
              <th className="py-3 px-2 text-left">Price</th>
              <th className="py-3 px-2 text-center">Update Item</th>
              <th className="py-3 px-2 text-center">Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr
                key={item.id}
                className={
                  index % 2 === 0
                    ? "bg-orange-50 hover:bg-orange-100 transition-colors"
                    : "bg-white hover:bg-orange-100 transition-colors"
                }
              >
                <td className="py-3 px-2 font-semibold">{index + 1}</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3 min-w-[180px]">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 border-2 border-orange-300 shadow">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </div>
                    <div className="truncate">
                      <div className="font-bold text-base text-black truncate">
                        {item.name}
                      </div>
                      <div className="text-sm opacity-60 text-black capitalize truncate">
                        {item.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 max-w-xs md:max-w-md truncate">
                  <p className="text-sm text-gray-700 truncate">{item.desc}</p>
                </td>
                <td className="py-3 px-2 max-w-xs md:max-w-md truncate">
                  <p className="text-sm text-gray-700 truncate">{item.price}</p>
                </td>
                <td className="py-3 px-2 text-center">
                  <Link to={`/dashboard/update-item/${item.id}`}>
                    <button className="btn btn-xs md:btn-sm bg-blue-500 hover:bg-blue-600 text-white rounded shadow flex items-center gap-1 mx-auto">
                      <FaEdit className="inline-block" />
                      <span className="hidden sm:inline">Update</span>
                    </button>
                  </Link>
                </td>
                <td className="py-3 px-2 text-center">
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="btn btn-xs md:btn-sm bg-red-500 hover:bg-red-600 text-white rounded shadow flex items-center gap-1 mx-auto"
                  >
                    <FaTrash className="inline-block" />
                    <span className="hidden sm:inline">Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Card view for mobile screens */}
      <div className="block md:hidden space-y-4">
        {menu.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="mask mask-squircle h-16 w-16 border-2 border-orange-300 shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-lg text-black truncate">
                  {item.name}
                </div>
                <div className="text-sm opacity-60 text-black capitalize truncate">
                  {item.category}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-700 truncate">{item.desc}</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-base font-semibold text-orange-600">
                ${item.price}
              </div>
              <div className="flex gap-2">
                <Link to={`/dashboard/update-item/${item.id}`}>
                  <button className="btn btn-xs bg-blue-500 hover:bg-blue-600 text-white rounded shadow flex items-center gap-1">
                    <FaEdit className="inline-block" />
                    <span>Update</span>
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="btn btn-xs bg-red-500 hover:bg-red-600 text-white rounded shadow flex items-center gap-1"
                >
                  <FaTrash className="inline-block" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
