import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { ChildrenProps } from "../types";

const AdminRoute: React.FC<ChildrenProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  
  if (loading || isAdminLoading) {
    return <progress className="py-20 progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return <>{children}</>;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
