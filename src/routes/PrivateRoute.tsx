import { Navigate } from "react-router-dom";
import { isLoggedIn, userRole } from "../services/auth.service";

const PrivateRoute = ({
  children,
  roles,
}: {
  children: JSX.Element;
  roles: any;
}) => {
  const isAuthenticated = isLoggedIn();
  const userHasRequiredRole = roles.includes(userRole()) ? true : false;
  if (!isAuthenticated) {
    return <Navigate to="/error/401"></Navigate>;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <Navigate to="/error/403" />;
  }

  return children;
};
export default PrivateRoute;
