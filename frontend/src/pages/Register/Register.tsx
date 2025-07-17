import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";
import {
  showSuccessAlert,
  showErrorAlert,
  showLoadingAlert,
  closeLoadingAlert,
} from "../../utils/alertUtils";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    showLoadingAlert("Creating your account...");

    createUser(email, password, name)
      .then(() => {
        return logoutUser();
      })
      .then(() => {
        const newUser = { name, email, password };
        fetch("https://hunger-hub-backend.vercel.app/api/users/register", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            closeLoadingAlert();
            if (data.id || data._id) {
              showSuccessAlert("Registration successful!");
              navigate("/login");
            } else if (data.message === "User already exists") {
              showErrorAlert("User with this email already exists.");
            } else {
              showErrorAlert("Registration failed. Please try again.");
            }
          })
          .catch((error: any) => {
            closeLoadingAlert();
            console.error("Registration error:", error);
            showErrorAlert("An error occurred during registration.");
          });
      })
      .catch((error: any) => {
        closeLoadingAlert();
        showErrorAlert(
          error.message || "Registration failed. Please try again."
        );
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Helmet>
        <title>HungerHub | Register</title>
      </Helmet>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Create Your Account
            </h2>
            <p className="text-lg text-gray-300 max-w-md mx-auto">
              Join our community of food lovers and start your culinary journey
              today
            </p>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center text-gray-300 space-x-2">
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300 hover:scale-105"
              >
                Home
              </Link>
              <span className="text-yellow-400">›</span>
              <span className="text-white font-medium">Create Account</span>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-white mb-3 items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    minLength={3}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-white mb-3 items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-300"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-white mb-3 items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-300"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-300 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Password must contain at least 8 characters, including
                    numbers, lowercase and uppercase letters
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-yellow-500 hover:via-orange-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Create Account
                </span>
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-300 font-medium">
                    Or continue with
                  </span>
                </div>
              </div>
              <SocialLogin></SocialLogin>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-300">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300 hover:underline"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
