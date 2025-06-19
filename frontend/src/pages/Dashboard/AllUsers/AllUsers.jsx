import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (userId) => {
    axiosSecure
      .patch(`/api/users/admin/${userId}`)
      .then((res) => {
        refetch();
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          alert(`{user.name} is an Admin Now`);
        }
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleDeleteUser = (email) => {
    axiosSecure.delete(`/api/users/${email}`).then(() => {
      refetch();
    });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          All Users
        </h1>
        <p className="text-gray-600 text-center">Total Users: {users.length}</p>
      </div>

      {/* Card layout for mobile */}
      <div className="md:hidden space-y-4">
        {users.map((user, index) => (
          <div
            key={user._id}
            className="bg-white rounded-xl shadow p-4 flex items-center gap-4 border border-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-xl shadow">
              {user.name
                ? user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)
                : "?"}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 text-lg">
                {user.name}
              </div>
              <div className="text-gray-500 text-sm">{user.email}</div>
              <div className="text-gray-400 text-xs mt-1">
                Last Login:{" "}
                {user.lastLogin || (
                  <span className="italic text-gray-300">Never</span>
                )}
              </div>
              <div className="mt-2 flex items-center gap-2">
                {user.role === "admin" ? (
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 border border-green-300 shadow-sm">
                    Admin
                  </span>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user.id)}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-300 hover:bg-blue-200 transition"
                  >
                    Make Admin
                  </button>
                )}
                <button
                  onClick={() => handleDeleteUser(user.email)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold shadow-sm transition text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="text-gray-300 text-xs font-bold">#{index + 1}</div>
          </div>
        ))}
      </div>

      {/* Table for md and up */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-blue-900 to-amber-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className={
                    index % 2 === 0
                      ? "bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                      : "bg-white hover:bg-blue-50 transition-colors duration-200"
                  }
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                    {/* Avatar with initials */}
                    <div className="w-9 h-9 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-lg shadow">
                      {user.name
                        ? user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                            .slice(0, 2)
                        : "?"}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {user.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin || (
                      <span className="italic text-gray-300">Never</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.role === "admin" ? (
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 border border-green-300 shadow-sm">
                        Admin
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user.id)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-300 hover:bg-blue-200 transition"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleDeleteUser(user.email)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold shadow-sm transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
