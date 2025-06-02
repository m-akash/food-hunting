import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "hover:text-primary transition-colors duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "hover:text-primary transition-colors duration-300"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "hover:text-primary transition-colors duration-300"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "hover:text-primary transition-colors duration-300"
          }
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "hover:text-primary transition-colors duration-300"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-md fixed z-10 bg-opacity-30 bg-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <span className="text-primary font-bold">Hunger</span>{" "}
          <span className="font-semibold">Hub</span>
        </Link>
      </div>

      <div className="navbar-end flex-1">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                <span className="badge badge-sm indicator-item bg-primary text-white">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge badge-primary">New</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
