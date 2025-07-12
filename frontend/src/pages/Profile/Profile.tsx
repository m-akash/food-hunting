import useAuth from "../../hooks/useAuth";
import defaultProfile from "../../assets/others/profile.png";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gradient-to-r from-blue-900 to-amber-200 py-8">
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
      </div>
    </div>
  );
};

export default Profile;
