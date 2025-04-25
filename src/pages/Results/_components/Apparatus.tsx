import FX from "@/assets/images/FX.png";
import HB from "@/assets/images/HB.png";
import PB from "@/assets/images/PB.png";
import PH from "@/assets/images/PH.png";
import SR from "@/assets/images/SR.png";
import VT from "@/assets/images/VT.png";
import { Center, Flex, Image, Text } from "@chakra-ui/react";
const data = [
  {
    id: 1,
    img: FX,
    title: "",
  },
  {
    id: 2,
    img: HB,
    title: "",
  },
  {
    id: 3,
    img: PB,
    title: "",
  },
  {
    id: 4,
    img: VT,
    title: "Vault",
  },
  {
    id: 5,
    img: SR,
    title: "",
  },
  {
    id: 6,
    img: PH,
    title: "",
  },
];

export const Apparatus = () => {
  return (
    <Center gap={"56px"} display={"none"} lg={{ display: "flex" }}>
      {data.map((item) => {
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
