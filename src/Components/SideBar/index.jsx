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
          {/* <div className="tabsSection ">
            <Tabs className="flex  justify-around bg-red py-5">
              <Tabs.Item active title="Menu">
                This is <span>Profile tab's associated content</span>. Clicking
                another tab will toggle the visibility of this one for the next.
                The tab JavaScript swaps classes to control the content
                visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Instant Doctors">
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
            </Tabs>
          </div> */}

          <div className="tabsSection ">
            <Tabs className="flex  justify-around bg-red py-5">
              {/* {SidebarTabsData.map((data, index) => (
                <TabsComponent
                  key={index}
                  tabTitle={data?.tabTitle}
                  tabData={data?.tabData}
                  active={index === 0}
                />
              ))} */}

              <Tabs.Item active title="Menu">
                This is <span>Profile tab's associated content</span>. Clicking
                another tab will toggle the visibility of this one for the next.
                The tab JavaScript swaps classes to control the content
                visibility and styling.
              </Tabs.Item>

              <Tabs.Item active title="Mensssu">
                This
              </Tabs.Item>
              <TabsComponent />
              <h1>Hello</h1>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
