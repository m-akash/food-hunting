import useAuth from "../../hooks/useAuth";
import defaultProfile from "../../assets/others/profile.png";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-100 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col items-center">
        <img
          src={user?.photoURL || defaultProfile}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800 uppercase">
          {user?.displayName || user?.email.split("@gmail.com")}
        </h2>
        <p className="text-gray-600 mb-4">{user?.email}</p>
        <div className="w-full border-t border-gray-200 mt-4 pt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Profile Details
          </h3>
          <ul className="text-gray-600">
            <li>
              <span className="font-medium">UID:</span> {user?.uid || "N/A"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
