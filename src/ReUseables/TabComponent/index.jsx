import React from "react";
import { Tabs } from "flowbite-react";
const TabsComponent = ({ tabTitle, active, tabData }) => {
  return (
    // <Tabs.Item active={String(active)} title={String(tabTitle)}>
    //   {String(tabData)}
    // </Tabs.Item>
    <Tabs.Item active title="Menu2">
      This is <span>Profile tab's associated content</span>. Clicking another
      tab will toggle the visibility of this one for the next. The tab
      JavaScript swaps classes to control the content visibility and styling.
    </Tabs.Item>
  );
};
export default TabsComponent;
