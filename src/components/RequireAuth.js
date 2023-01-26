import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// is it like a middleware?
// parameter allowedRoles would be a array.
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("auth : ", auth);
  //   console.log("location  : ", location);

  // ternary separation
  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    // authorized
    <Outlet />
  ) : auth?.user ? (
    // unauthorized
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    // needed to login
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
