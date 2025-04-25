import HamburgerMenu from "@/assets/icons/HamburgerMenu";
import LiveIcon from "@/assets/icons/LiveIcon";
import Header from "@/components/Header";
import TabPanel from "@/components/TabPanel";
import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
const tabItems = [
  {
    label: "Live",
    icon: <LiveIcon />,
  },
  {
    label: "Startlist",
  },
  {
    label: "Schedule",
  },
  {
    label: "Results",
  },
  {
    label: "Medals",
  },
];
const MainLayout = ({ children }: any) => {
  return (
    <div>
      <main className="flex-1 p-4">
        <Box bg={"#080915"} minH={"100vh"}>
          <Container py={"24px"} lg={{ py: "180px" }}>
            <Box
              display={"flex"}
              w={"100%"}
              justifyContent={"flex-end"}
              lg={{ display: "none" }}
              mb={"72px"}
            >
              <HamburgerMenu />
            </Box>
            <Header />
            <TabPanel
              tabs={tabItems}
              children={children}
              defaultIndex={1}
              mt="0"
              lg={{ mt: "48px" }}
              color="#fff"
            />
            <Outlet />
          </Container>
        </Box>
      </main>
    </div>
  );
};

export default MainLayout;
