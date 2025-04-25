import LeftArrow from "@/assets/icons/LeftArrow";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex gap={"32px"} color="#fff">
      <Box cursor={"pointer"} pt={"8px"} onClick={() => navigate(-1)}>
        <LeftArrow />
      </Box>
      <Flex flexDirection={"column"} gap={"16px"}>
        <Heading
          fontWeight={"400"}
          size={"4xl"}
          fontSize="24px"
          lg={{ fontSize: "36px" }}
        >
          FIG ARTISTIC GYMNASTICS WORLD CUP
        </Heading>
        <Text
          fontSize={"16px"}
          lg={{ fontSize: "20px", color: "#F2F2F2" }}
          fontWeight={"400"}
          lineHeight={"28px"}
          color={"#9598B1"}
        >
          Doha, Qatar | 12/03/2023 - 13/02/2023
        </Text>
      </Flex>
    </Flex>
  );
};
export default Header;
