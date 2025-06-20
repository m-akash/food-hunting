import React from "react";
import { FaCreditCard, FaUser, FaCalendarAlt, FaLock } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import {
  closeLoadingAlert,
  showConfirmationDialog,
  showErrorAlert,
  showLoadingAlert,
  showSuccessAlert,
} from "../../../utils/alertUtils";

const Payment = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((price, item) => price + item.price, 0);

  const handleProcessPayment = () => {
    if (cart.length === 0) {
      showErrorAlert("Your cart is empty!");
      return;
    }
    showConfirmationDialog(
      "Process Payment",
      "Are you sure you want to proceed with the payment?"
    ).then((result) => {
      if (result.isConfirmed) {
        showLoadingAlert("Processing payment...");
        // Add your payment processing logic here
        setTimeout(() => {
          closeLoadingAlert();
          showSuccessAlert("Payment processed successfully!");
        }, 2000);
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 min-h-[80vh] flex flex-col justify-center">
      {/* Payment Icon and Title */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg">
          <FaCreditCard className="text-4xl text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Payment Details
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Enter your card information to complete your purchase securely.
        </p>
      </div>

      {/* Payment Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-gray-700">
            Total Amount
          </span>
          <span className="text-2xl font-bold text-orange-500">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-400">
          You will be charged this amount for your order.
        </p>
      </div>

      {/* Payment Form */}
      <form className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20 space-y-6">
        {/* Cardholder Name */}
        <div className="group">
          <label className="flex text-sm font-semibold text-gray-700 mb-2 items-center">
            <FaUser className="w-4 h-4 mr-2 text-yellow-400" />
            Cardholder Name
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-800  backdrop-blur-sm group-hover:bg-white/15"
              placeholder="Full Name on Card"
              autoComplete="off"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
        {/* Card Number */}
        <div className="group">
          <label className="flex text-sm font-semibold text-gray-700 mb-2 items-center">
            <FaCreditCard className="w-4 h-4 mr-2 text-yellow-400" />
            Card Number
          </label>
          <div className="relative">
            <input
              type="number"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-800  backdrop-blur-sm group-hover:bg-white/15"
              placeholder="1234 5678 9012 3456"
              autoComplete="off"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
        {/* Expiry and CVV */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="group w-full">
            <label className="flex text-sm font-semibold text-gray-700 mb-2 items-center">
              <FaCalendarAlt className="w-4 h-4 mr-2 text-yellow-400" />
              Expiry Date
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-800  backdrop-blur-sm group-hover:bg-white/15"
                placeholder="MM/YY"
                autoComplete="off"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
          <div className="group w-full">
            <label className="flex text-sm font-semibold text-gray-700 mb-2 items-center">
              <FaLock className="w-4 h-4 mr-2 text-yellow-400" />
              CVV
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-gray-800  backdrop-blur-sm group-hover:bg-white/15"
                placeholder="123"
                autoComplete="off"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
        {/* Pay Button */}
        <button
          onClick={handleProcessPayment}
          type="button"
          className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-xl hover:from-yellow-500 hover:via-orange-500 hover:to-pink-600 "
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
