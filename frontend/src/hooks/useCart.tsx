import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { CartItem } from "../types";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery<CartItem[]>({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const result = await axiosSecure.get(
        `/api/carts?userEmail=${user.email}`
      );
      return result.data;
    },
    enabled: !!user?.email,
  });
  return [cart, refetch] as const;
};

export default useCart;
