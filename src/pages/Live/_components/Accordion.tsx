import { LIVE_TABLE } from "@/consts";
import {
  Accordion,
  Box,
  Text,
  Span,
  Flex,
  Image,
  Badge,
} from "@chakra-ui/react";

const AccordionLive = () => {
  return (
    <Accordion.Root
      collapsible
      defaultValue={["b"]}
      display={"flex"}
      flexDirection={"column"}
      color={"#FFF"}
      border={"none"}
      mt={"24px"}
      gap={"20px"}
      lg={{ display: "none" }}
    >
      {LIVE_TABLE.map((item, index) => (
        <Accordion.Item
          key={index}
          value={String(item.id)}
          bg={"#1A1635"}
          p={"12px"}
          borderRadius={"8px"}
          border={"none"}
        >
          <Accordion.ItemTrigger>
            <Box flex={"1"} display={"flex"} alignItems={"center"} gap={"24px"}>
              <Image src={item.img} />
              <Span>{item.country}</Span>
              <Span>{item.name}</Span>
              <Span>{item.bib}</Span>
            </Box>
            {!!item.status ? (
              <>
                <Badge
                  size={"lg"}
                  color={"#fff"}
                  p={"4px 12px"}
                  bg={item?.status === "Wait" ? "#F5A100" : "#02D169"}
                >
                  {item.status}
                </Badge>
              </>
            ) : (
              <Accordion.ItemIndicator />
            )}
          </Accordion.ItemTrigger>
          {!item.status && (
            <Accordion.ItemContent
              mt={"12px"}
              borderTop={"1px solid #080915"}
              color={"#fff"}
            >
              <Accordion.ItemBody
                py={"16px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"12px"}
              >
                <Box display={"flex"} gap={"28px"} justifyContent={"flex-end"}>
                  <Text>{item.d && `D: ${item.d}`}</Text>
                  <Text>{item.e && `E: ${item.e}`}</Text>
                  <Text>{item.pen && `P: ${item.pen}`}</Text>
                </Box>
                <Flex justifyContent={"space-between"}>
                  <Text>App</Text>
                  <Text alignItems={"center"} display={"flex"} gap={"13px"}>
                    {item.app?.value}
                    <Text
                      background={"#0A8BEC"}
                      w={"32px"}
                      height={"32px"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {item.app?.rank}
                    </Text>
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text>AA</Text>
                  <Text display={"flex"} alignItems={"center"} gap={"13px"}>
                    {item.aa?.value}
                    <Text
                      background={"#0A8BEC"}
                      w={"32px"}
                      height={"32px"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {item.aa?.rank}
                    </Text>
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text>Team</Text>
                  <Text display={"flex"} alignItems={"center"} gap={"13px"}>
                    {item.team?.value}

                    <Text
                      background={"#0A8BEC"}
                      w={"32px"}
                      height={"32px"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {item.team?.rank}
                    </Text>
                  </Text>
                </Flex>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          )}
        </Accordion.Item>
      ))}
      <Accordion.Item
        key={"last"}
        value={"last"}
        bg={"#1A1635"}
        p={"12px"}
        borderRadius={"8px"}
        border={"none"}
      >
        <Text
          border={"none"}
          fontSize={"16px"}
          color={"#FF9C07"}
          textWrap={"nowrap"}
        >
          Inquiry Submitted
        </Text>
        <Accordion.ItemTrigger>
          <Box flex={"1"} display={"flex"} alignItems={"center"} gap={"24px"}>
            <Image src={LIVE_TABLE[5].img} />
            <Span>{LIVE_TABLE[5].country}</Span>
            <Span>{LIVE_TABLE[5].name}</Span>
            <Span>{LIVE_TABLE[5].bib}</Span>
          </Box>
        </Accordion.ItemTrigger>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default AccordionLive;
