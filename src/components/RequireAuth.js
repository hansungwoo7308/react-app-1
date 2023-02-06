// route 를 wrapping 한 pre-route (it's like a middleware)

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/* 16진수 표기법 */
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

// RequireAuth - depending on the auth state(allowedRoles), seperate it
// is it like a middleware?
// parameter allowedRoles would be a array.
const RequireAuth = ({ allowedRoles }) => {
  console.log(
    `${GREEN}RequireAuth -------------------------------------------------------------------------- ${END}`
  );

  const { auth } = useAuth();
  const location = useLocation();

  //   console.log("location  : ", location);
  const foundRole = auth?.roles?.find((role) => allowedRoles?.includes(role));
  // console.log(`${GREEN}allowedRoles : ${END}`, allowedRoles);
  // console.log(`${GREEN}react.state.auth : `, auth);
  // console.log(`${GREEN}foundRole : `, foundRole);

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
