import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaUtensils,
} from "react-icons/fa";
import CountUp from "react-countup";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: stat,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats/");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || "Failed to load admin stats."}</div>;
  }

  const stats = [
    {
      label: "Total Users",
      value: stat?.totalUsers ?? 0,
      icon: <FaUsers className="text-4xl text-blue-500 mb-2" />,
      color: "from-blue-100 to-blue-50",
    },
    {
      label: "Total Orders",
      value: stat?.totalOrders ?? 0,
      icon: <FaShoppingCart className="text-4xl text-green-500 mb-2" />,
      color: "from-green-100 to-green-50",
    },
    {
      label: "Revenue",
      value: stat?.revenue ?? 0,
      icon: <FaDollarSign className="text-4xl text-yellow-500 mb-2" />,
      color: "from-yellow-100 to-yellow-50",
      isCurrency: true,
    },
    {
      label: "Menu Items",
      value: stat?.menuItems ?? 0,
      icon: <FaUtensils className="text-4xl text-pink-500 mb-2" />,
      color: "from-pink-100 to-pink-50",
    },
  ];

  return (
    <div className="px-4 py-10 md:px-10 lg:px-20 text-black min-h-[80vh] bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-2">
          Welcome, Admin!
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">
          Here's a quick overview of your dashboard
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`w-full bg-gradient-to-br ${stat.color} rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
            tabIndex={0}
            aria-label={stat.label}
          >
            {stat.icon}
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {stat.isCurrency ? (
                <CountUp
                  end={stat.value}
                  prefix="$"
                  separator=","
                  duration={1.5}
                  decimals={2}
                />
              ) : (
                <CountUp end={stat.value} separator="," duration={1.5} />
              )}
            </div>
            <div className="text-md md:text-lg text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
