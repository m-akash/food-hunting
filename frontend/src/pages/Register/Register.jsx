import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const userAuth = { email };
    const userData = { name, email };

    console.log(userAuth);
    console.log(userData);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <div
      // initial={{ opacity: 1, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{
      //   duration: 0.5,
      //   delay: 0.1,
      // }}
      className="min-h-screen my-5 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
    >
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

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-500 to-violet-500 mb-8">
          Create Your Account
        </h1>

        <div className="max-w-2xl mx-auto bg-white backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-gray-700">
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                minLength="3"
                className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-black placeholder-gray-400"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-black placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
              <div className="validator-hint hidden text-sm text-red-400 mt-1">
                Enter valid email address
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-black placeholder-gray-400"
                placeholder="Create a password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                required
              />
              <span className="validator-hint hidden text-sm text-gray-400 mt-2">
                Password must contain:
                <ul className="list-disc list-inside mt-1">
                  <li>At least 8 characters</li>
                  <li>At least one number</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one uppercase letter</li>
                </ul>
              </span>
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-black mb-2">
                I want to register as
              </label>
              <select
                id="registerAs"
                name="registerAs"
                className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-black"
                required
              >
                <option value="">Select your role</option>
                <option value="employer">Employer</option>
                <option value="jobSeeker">Job Seeker</option>
              </select>
            </div> */}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-black py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Create Account
            </button>

            <div className="divider">OR</div>
            {/* <SocialLogin></SocialLogin> */}

            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
