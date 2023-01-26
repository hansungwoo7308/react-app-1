import { Outlet } from "react-router-dom";

import { Style } from "../styles/Layout.styled";

const Layout = () => {
  return (
    <Style>
      <Outlet />
    </Style>
  );
};

export default Layout;
