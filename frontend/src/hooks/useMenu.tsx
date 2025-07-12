import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MenuItem } from "../types";

const useMenu = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: menu = [] } = useQuery<MenuItem[]>({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/menu");
      return res.data;
    },
  });
  return [menu, refetch] as const;
};

export default useMenu;
