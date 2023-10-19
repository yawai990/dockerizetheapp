import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/post"}>Post</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
