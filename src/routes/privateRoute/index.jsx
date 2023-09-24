import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  let token = localStorage.AccessToken;
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
