import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import {
  showSuccessAlert,
  showErrorAlert,
  showLoadingAlert,
  closeLoadingAlert,
} from "../../utils/alertUtils";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (event) => {
    const captcha_value = event.target.value;
    if (validateCaptcha(captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setIsLoading(true);
    showLoadingAlert("Signing in...");

    loginUser(email, password)
      .then(() => {
        closeLoadingAlert();
        showSuccessAlert("Successfully signed in!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        closeLoadingAlert();
        showErrorAlert(error.message || "Failed to sign in. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
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
        <title>HungerHub | Login</title>
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
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome Back
            </h2>
            <p className="text-lg text-gray-300 max-w-md mx-auto">
              Sign in to your account and continue your culinary journey
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
              <span className="text-white font-medium">Sign In</span>
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
            <form onSubmit={handleSignIn} className="space-y-6">
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
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-300 "
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
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-300 "
                    placeholder="Enter your password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    required
                  />
                </div>
              </div>

              {/* Captcha Field */}
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Verify you're human
                </label>
                <div className="bg-white/5 rounded-xl p-4 border border-white/20">
                  <LoadCanvasTemplate />
                </div>
                <div className="mt-3 relative">
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-300 "
                    placeholder="Type the above text here"
                    required
                  />
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link className="text-yellow-400 hover:text-yellow-300 font-medium transition-all duration-300 hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                disabled={disabled || isLoading}
                type="submit"
                className={`w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-xl ${
                  disabled || isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:from-yellow-500 hover:via-orange-500 hover:to-pink-600"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </div>
                ) : (
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
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Sign In
                  </span>
                )}
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

              {/* Social Login */}
              <SocialLogin />

              {/* Register Link */}
              <div className="text-center">
                <p className="text-gray-300">
                  New to Food Hunting?{" "}
                  <Link
                    to="/register"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300 hover:underline"
                  >
                    Create an account
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

export default Login;
