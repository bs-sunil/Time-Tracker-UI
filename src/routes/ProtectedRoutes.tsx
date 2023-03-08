import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../services/auth.service";

const ProtectedRoutes = (props: any) => {
  const location = useLocation();
  const url = location.pathname.split("/")[1];
  const status = isLoggedIn();
  return <>{status ? <props.layout /> : <Navigate to={`/`} />}</>;
};

export default ProtectedRoutes;
