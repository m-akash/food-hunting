import { useEffect, useState } from "react";
import { MenuItem } from "../types";

const useFoodMenu = (): [MenuItem[], boolean] => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hunger-hub-backend.vercel.app/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useFoodMenu;
