import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaCalendarCheck,
  FaHistory,
  FaShoppingCart,
  FaStar,
  FaClipboardList,
  FaBars,
  FaTimes,
  FaUtensils,
  FaUsers,
  FaBox,
  FaBookmark,
  FaListAlt,
  FaStore,
  FaPhoneAlt,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isAdmin] = useAdmin();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-blue-900 to-amber-200"
      data-theme="light"
    >
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-orange-400 text-white hover:bg-orange-500 transition-colors shadow-lg"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`fixed md:static w-64 min-h-screen bg-gradient-to-r from-blue-900 to-amber-200 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } z-40 shadow-xl`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center border-b border-orange-300 pb-4">
            {isAdmin ? "Admin Dashboard" : "User Dashboard"}
          </h2>
          <ul className="space-y-3">
            {isAdmin ? (
              <div>
                <li className="py-2">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaHome className="text-lg" /> Admin Home
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/dashboard/add-items"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaBox className="text-lg" /> Add Items
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/dashboard/manage-items"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaListAlt className="text-lg" /> Manage Items
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/dashboard/manage-booking"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaBookmark className="text-lg" /> Manage Bookings
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaUsers className="text-lg" /> All Users
                  </NavLink>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaHome className="text-lg" /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/reservation"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaCalendarCheck className="text-lg" /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment-history"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaHistory className="text-lg" /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaShoppingCart className="text-lg" /> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaStar className="text-lg" /> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/booking"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? " text-orange-500 shadow-md border-b-2"
                          : "text-white hover:bg-orange-500 hover:shadow-md"
                      }`
                    }
                  >
                    <FaClipboardList className="text-lg" /> My Booking
                  </NavLink>
                </li>
              </div>
            )}

            <div className="border-t border-orange-300 my-6"></div>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? " text-orange-500 shadow-md border-b-2"
                      : "text-white hover:bg-orange-500 hover:shadow-md"
                  }`
                }
              >
                <FaHome className="text-lg" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? " text-orange-500 shadow-md border-b-2"
                      : "text-white hover:bg-orange-500 hover:shadow-md"
                  }`
                }
              >
                <FaUtensils className="text-lg" /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? " text-orange-500 shadow-md border-b-2"
                      : "text-white hover:bg-orange-500 hover:shadow-md"
                  }`
                }
              >
                <FaStore className="text-lg" /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? " text-orange-500 shadow-md border-b-2"
                      : "text-white hover:bg-orange-500 hover:shadow-md"
                  }`
                }
              >
                <FaPhoneAlt className="text-lg" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8 h-screen overflow-y-auto">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-900 to-amber-200 rounded-lg shadow-lg p-6 backdrop-blur-sm bg-opacity-90">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
