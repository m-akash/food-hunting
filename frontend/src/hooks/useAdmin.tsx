import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery<{ admin: boolean }>({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      if (!user?.email) throw new Error("User email not found");
      const res = await axiosSecure.get(`/api/users/admin/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [isAdmin?.admin || false, isAdminLoading] as const;
};

export default useAdmin;
