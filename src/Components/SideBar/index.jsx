import React from "react";
import "./Sidebar.scss";
import { RxCross1 } from "react-icons/rx";
import hooks from "../../Hooks";
import reuseables from "../../ReUseables";
import { Tabs } from "flowbite-react";
import utils from "../../Utils";
const { TabsComponent } = reuseables;
const { useWindowSize } = hooks;
const { SidebarTabsData } = utils;

const SideBar = ({ isSideBarOpen, toggleSideBar }) => {
  const width = useWindowSize();
  return (
    <div>
      {width < 1000 && (
        <div className={`sidebar ${isSideBarOpen ? "open" : ""}`}>
          <div
            className="sidebarHead flex items-center justify-center gap-2 text-[14px] bg-[#F6F9FC] py-3"
            onClick={toggleSideBar}
          >
            <div className="">Close Sidebar</div>
            <div className="">
              <RxCross1 />
            </div>
          </div>
          <div className="tabsSection">
            <TabsComponent SidebarTabsData={SidebarTabsData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
