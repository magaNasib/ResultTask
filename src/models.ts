import { ReactNode } from "react";

export type TabData = {
  label: string;
  icon?: ReactNode;
};

export type TabPanelProps = {
  tabs: TabData[];
  [x: string]: any; // allows passing Chakra UI props like mt, px, etc.
};
