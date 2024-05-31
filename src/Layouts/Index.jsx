import React, { useState } from "react";
import "./index.scss";
import components from "../Components";
import { Outlet } from "react-router-dom";
const { NavBar, SideBar } = components;
const Layout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className="layout">
      <NavBar toggleSideBar={toggleSideBar} />
      <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      <Outlet />
    </div>
  );
};

export default Layout;
