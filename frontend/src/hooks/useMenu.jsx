import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/menu");
      return res.data;
    },
  });
  return [menu, refetch];
};

export default useMenu;
