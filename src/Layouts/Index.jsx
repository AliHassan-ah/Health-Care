import React from "react";
import "./index.scss";
import components from "../Components";
import { Outlet } from "react-router-dom";
const { NavBar } = components;
const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
