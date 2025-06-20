import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import defaultProfile from "../../../assets/others/profile.png";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [cart] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("Logout successfully!");
        navigate("/");
      })
      .catch(() => {
        alert("Unsuccessfull logout!");
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-1  font-semibold"
              : "text-white hover:text-amber-200 transition-colors duration-300"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-1 font-semibold"
              : "text-white hover:text-amber-200 transition-colors duration-300"
          }
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-1 font-semibold"
              : "text-white hover:text-amber-200 transition-colors duration-300"
          }
        >
          Order-Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-1 font-semibold"
              : "text-white hover:text-amber-200 transition-colors duration-300"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-lg fixed z-20 bg-gradient-to-r from-blue-900/70 to-amber-200/60 backdrop-blur-md border-b border-white/20">
      <div className="navbar-start -mr-20">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-white/10 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white drop-shadow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-black/80 text-backdrop-blur-md rounded-xl w-56 border border-white/30"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost btn-primary text-2xl md:text-3xl px-2 md:px-4 drop-shadow-lg"
        >
          <span className="text-white font-extrabold tracking-wide">
            Hunger
          </span>{" "}
          <span className="text-amber-400 font-extrabold tracking-wide">
            Hub
          </span>
        </Link>
      </div>

      <div className="navbar-end flex-1">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal pr-50 px-2 gap-8 text-lg font-medium">
            {navLinks}
          </ul>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-white/10 transition-all duration-300"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white drop-shadow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-gradient-to-r from-blue-900 to-amber-400 text-white border-0 shadow-md">
                  {cart.length}
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-60 bg-white/90 backdrop-blur-md shadow-xl rounded-xl border border-white/30"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-blue-900">
                  {cart.length} Items
                </span>
                <span className="text-amber-600 font-semibold">
                  Subtotal: ${totalPrice}
                </span>
                <div className="card-actions">
                  <Link
                    to="/dashboard/cart"
                    className="btn btn-primary btn-block bg-gradient-to-r from-blue-900 to-amber-400 border-0 text-white shadow hover:scale-105 transition-transform duration-200"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-full ring-2 ring-amber-400 ring-offset-2 ring-offset-white overflow-hidden">
                    <img
                      alt="User avatar"
                      src={user?.photoURL || defaultProfile}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white/90 backdrop-blur-md rounded-xl w-56 border border-white/30"
                >
                  <li>
                    <Link
                      to="/profile"
                      className="justify-between text-blue-900 font-semibold hover:bg-amber-100 rounded-lg"
                    >
                      Profile
                      <span className="badge badge-primary">New</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard"
                      className="justify-between text-blue-900 font-semibold hover:bg-amber-100 rounded-lg"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={handleLogout}
                      to="/logout"
                      className="text-red-500 font-semibold hover:bg-red-100 rounded-lg"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <button className="btn bg-gradient-to-r from-blue-900 to-amber-400 text-white font-bold shadow hover:scale-105 transition-transform duration-200">
              <Link to="/login" className="text-sm md:text-[16px]">
                Login / Register
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
