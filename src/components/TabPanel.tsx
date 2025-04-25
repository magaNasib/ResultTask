import { PROJECT_TABS } from "@/consts";
import { TabPanelProps } from "@/models";
import { getActiveTabIndex, getActiveTabLabel } from "@/utils";
import { Box, Flex, Tabs } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const TabPanel = ({ tabs, children, ...rest }: TabPanelProps) => {
  const { pathname } = useLocation();
  const push = useNavigate();

  const activeTabIndex = getActiveTabIndex(pathname);

  const renderTabs = (): React.ReactNode =>
    PROJECT_TABS.map((item, index) => (
      <Tabs.Content
        p="0"
        key={index}
        value={item}
        position="absolute"
        inset="0"
        _open={{
          animationName: "fade-in, scale-in",
          animationDuration: "300ms",
        }}
        _closed={{
          animationName: "fade-out, scale-out",
          animationDuration: "120ms",
        }}
      >
        {index === activeTabIndex ? children : null}
      </Tabs.Content>
    ));

  return (
    <Flex {...rest}>
      <Tabs.Root
        defaultValue={getActiveTabLabel(pathname, tabs)}
        w={"100%"}
        colorPalette={"blue"}
      >
        <Tabs.List
          display={"flex"}
          borderBottom={"1px solid #1A1635"}
          overflowX={"auto"}
        >
          {tabs.map((item, index) => (
            <Tabs.Trigger
              display={"flex"}
              fontSize={"16px"}
              lg={{ fontSize: "20px" }}
              justifyContent={"center"}
              key={index}
              value={item.label}
              color={"#E8E8EB"}
              p={"38px"}
              flex={"1"}
              onClick={() => push(PROJECT_TABS[index])}
            >
              {item?.icon}
              {item.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Box pos="relative" py={"0"} lg={{ py: "36px" }} width="full">
          {renderTabs()}
        </Box>
      </Tabs.Root>
    </Flex>
  );
};

export default TabPanel;
