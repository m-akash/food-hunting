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
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-amber-300">
      <Helmet>
        <title>HungerHub | Login</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]">
        <div className="bg-gradient-to-r from-blue-900 to-amber-300 py-8 md:py-5 h-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
              Welcome Back Foodie!
            </h1>
            <div className="flex items-center text-gray-100">
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white">Sign In</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-4 md:pt-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white animate-fade-in">
              Sign In
            </h1>
            <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 border border-orange-200 transform transition-all duration-300 hover:shadow-orange-200/50">
              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 text-gray-700 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 placeholder-gray-400 bg-white bg-opacity-90 hover:border-orange-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-3 text-gray-700 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 placeholder-gray-400 bg-white bg-opacity-90 hover:border-orange-300"
                    placeholder="Enter your password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    required
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    <LoadCanvasTemplate />
                  </label>
                  <div className="flex gap-2">
                    <input
                      onBlur={handleValidateCaptcha}
                      type="text"
                      name="captcha"
                      className="flex-1 px-4 py-3 text-gray-700 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 placeholder-gray-400 bg-white bg-opacity-90 hover:border-orange-300"
                      placeholder="Type the above text here"
                      required
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <Link className="text-orange-500 hover:text-orange-600 transition-colors duration-300">
                    Forgot password?
                  </Link>
                </div>

                <button
                  disabled={disabled}
                  type="submit"
                  className={`w-full bg-gradient-to-r from-blue-900 to-amber-300 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                    disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:from-orange-600 hover:to-amber-600"
                  }`}
                >
                  Sign In
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                <SocialLogin></SocialLogin>

                <p className="text-center text-gray-600">
                  New to Food Hunting?{" "}
                  <Link
                    to="/register"
                    className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
                  >
                    Register Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
