import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://hunger-hub-backend.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
