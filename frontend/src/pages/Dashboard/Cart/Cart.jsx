import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  showSuccessAlert,
  showErrorAlert,
  showLoadingAlert,
  closeLoadingAlert,
  showConfirmationDialog,
} from "../../../utils/alertUtils";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((price, item) => price + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleRemoveItem = (itemId) => {
    showConfirmationDialog(
      "Remove Item",
      "Are you sure you want to remove this item from your cart?"
    ).then((result) => {
      if (result.isConfirmed) {
        showLoadingAlert("Removing item...");
        axiosSecure
          .delete(`/api/carts/${itemId}`)
          .then(() => {
            closeLoadingAlert();
            showSuccessAlert("Item removed from cart!");
            refetch();
          })
          .catch(() => {
            closeLoadingAlert();
            showErrorAlert("Failed to remove item. Please try again.");
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              Total Items: {cart.length}
            </h2>
            <p className="text-gray-600 mt-1">Items in your cart</p>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              ${totalPrice.toFixed(2)}
            </h2>
            <p className="text-gray-600 mt-1">Total Amount</p>
          </div>

          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="btn btn-accent w-full sm:w-auto hover:scale-105 transition-transform">
                Process to Pay
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="btn btn-accent w-full sm:w-auto hover:scale-105 transition-transform"
            >
              Process to Pay
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Items Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                          <img
                            src={item.foodImg}
                            alt={item.foodName}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {item.foodName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.foodCategory}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      ${item.price}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="btn btn-error btn-sm hover:scale-105 transition-transform"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {cart.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-600">
            Add some delicious items to your cart!
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
