import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname.includes("/login");
  const hideHeaderAndFooterForRegister =
    location.pathname.includes("/register");
  return (
    <div className="bg-gradient-to-r from-blue-900 to-amber-200">
      {hideHeaderAndFooter || hideHeaderAndFooterForRegister || (
        <Navbar></Navbar>
      )}
      <Outlet></Outlet>
      {hideHeaderAndFooter || hideHeaderAndFooterForRegister || (
        <Footer></Footer>
      )}
    </div>
  );
};

export default Root;
