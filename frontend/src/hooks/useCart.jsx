import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(
        `/api/carts?userEmail=${user.email}`
      );
      return result.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
