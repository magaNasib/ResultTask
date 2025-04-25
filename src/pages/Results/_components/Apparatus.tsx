import { APPARATUSES_DATA } from "@/consts";
import { Center, Flex, Image, Text } from "@chakra-ui/react";

export const Apparatus = () => {
  return (
    <Center gap={"56px"} display={"none"} lg={{ display: "flex" }}>
      {APPARATUSES_DATA.map((item) => {
        return (
          <Flex
            flexDirection={"column"}
            gap={"8px"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            minHeight={"80px"}
          >
            <Image src={item.img} />
            <Text fontWeight={"400"} color={"#fff"}>
              {item.title}
            </Text>
          </Flex>
        );
      })}
    </Center>
  );
};
