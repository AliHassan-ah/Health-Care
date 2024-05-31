import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../Assets/logo.svg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import hooks from "../../Hooks";
const { useWindowSize } = hooks;
const NavBar = ({ toggleSideBar }) => {
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
  const handleSideMenu = () => {
    setIsOpenSideMenu(!isOpenSideMenu);
    toggleSideBar();
  };
  return (
    <div className="parent shadow w-full">
      <div className="navbarContainer ">
        <div className="wrapper">
          <div
            className="hamburger min-[1000px]:hidden"
            onClick={handleSideMenu}
          >
            <RxHamburgerMenu className="hamburgerIcon" />
          </div>
          <div className="left flex items-center gap-5">
            <div className="logo">
              <img
                src={logo}
                alt="logo"
                className="max-w-full w-[170px] max-[1000px]:w-[140px]"
              />
            </div>
            <div className="menuItems flex items-center justify-center gap-x-6 max-[1300px]:gap-3 max-[1000px]:hidden">
              <div className="doctors">
                Doctors
                <IoMdArrowDropdown className="arrowIcon" />
              </div>
              <div className="consult">
                Consult Online
                <IoMdArrowDropdown className="arrowIcon" />
              </div>
              <div className="hospitals">
                Hospitals
                <IoMdArrowDropdown className="arrowIcon" />
              </div>
              <div className="labTests">
                Lab Tests
                <IoMdArrowDropdown className="arrowIcon" />
              </div>
              <div className="Surgeries">
                Surgeries
                <IoMdArrowDropdown className="arrowIcon" />
              </div>
              <div className="healthBlog">
                Health Blog
                <IoMdArrowDropdown className="arrowIcon" />
              </div>
              <div className="relief !font-bold">Patient Relief - 10%</div>
            </div>
          </div>
          <div className="right flex items-center gap-1 justify-center">
            <FaPhoneSquareAlt className="phoneIcon" />
            <div className="login rounded flex items-center justify-center gap-1 cursor-pointer">
              <IoPersonSharp className="loginIcon" />
              <IoMdArrowDropdown className="arrowIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
