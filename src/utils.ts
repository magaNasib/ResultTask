import { PROJECT_TABS } from "./consts";
import { TabData } from "./models";

export const getActiveTabIndex = (pathname: string) => {
  switch (pathname) {
    case "/live":
      return 0;
    case "/results":
      return 3;
    default:
      return 0;
  }
};
export const getActiveTabLabel = (pathname: string, tabs: TabData[]) => {
  const index = PROJECT_TABS.indexOf(pathname);
  return tabs[index]?.label || tabs[0].label;
};
