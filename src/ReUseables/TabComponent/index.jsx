import React from "react";
import { Tabs } from "flowbite-react";
import { theme as defaultTheme } from "flowbite-react";

const TabsComponent = ({ SidebarTabsData }) => {
  const customTheme = {
    ...defaultTheme,
    tab: {
      base: "flex flex-col items-center justify-between w-full px-4 py-2 border-b-2",
      tablist: {
        base: "flex space-x-4 justify-around w-full",
      },
      tabpanel: {
        base: "p-4",
      },
      item: {
        base: "text-sm font-medium",
        active: {
          on: "text-blue-600 border-blue-600",
          off: "text-gray-500 border-transparent",
        },
      },
    },
  };

  return (
    <Tabs theme={customTheme}>
      {SidebarTabsData.map((data, index) => {
        return (
          <Tabs.Item active title={data?.tabTitle}>
            <div className="content">{data?.tabData}</div>
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
};
export default TabsComponent;
