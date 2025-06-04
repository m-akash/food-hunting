import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    // const form = event.target;
    // const email = form.email.value;
    // const password = form.password.value;


    // SignInUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     navigate(from);
    //   })
    //   .catch((errror) => {
    //     console.log("ERROR", errror);
    //   });
  };
  return (
    <div className="min-h-screen my-5 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="bg-gradient-to-r from-purple-400 to-violet-300 py-8 md:py-5 h-30">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My Account
          </h1>
          <div className="flex items-center text-gray-700">
            <Link to="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">My Account</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-4 md:pt-40">
        <h1 className=" text-purple-500 to-violet-500 text-3xl md:text-4xl font-bold text-center  mb-4">
          Sign In
        </h1>

        <div
          // initial={{ opacity: 1, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{
          //   duration: 0.5,
          //   delay: 0.1,
          // }}
          className="max-w-md mx-auto rounded-xl shadow-lg p-4 md:p-6 border border-gray-200"
        >
          <form onSubmit={handleSignIn} className="space-y-4 ">
            <div>
              <label className="block text-sm font-medium text-shadow-black mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 text-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-color placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-shadow-black mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2  text-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-color placeholder-gray-400"
                placeholder="Enter your password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                required
              />
            </div>

            <div className="text-sm">
              <Link className="text-purple-400 hover:text-purple-300 transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-violet-400 text-white py-2 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Sign In
            </button>

            <div className="divider">OR</div>
            {/* <SocialLogin></SocialLogin> */}

            <p className="text-center text-gray-400">
              New to this site?{" "}
              <Link
                to="/register"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
