import { RESULTS_TABLE } from "@/consts";
import { Accordion, Box, Text, Span, Flex } from "@chakra-ui/react";

const AccordionResult = () => {
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
      {RESULTS_TABLE.map((item, index) => (
        <Accordion.Item
          key={index}
          value={item.team}
          bg={"#1A1635"}
          p={"12px"}
          borderRadius={"8px"}
          border={"none"}
        >
          <Accordion.ItemTrigger>
            <Box flex={"1"} display={"flex"} alignItems={"center"} gap={"24px"}>
              <Span
                background={"#0A8BEC"}
                w={"32px"}
                height={"32px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {item.rank}
              </Span>
              <Span>{item.team}</Span>
              <Span>{item.name}</Span>
              <Span>{item.total.value3}</Span>
            </Box>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
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
                <Text>{item.d && `D: ${item.d.value1}`}</Text>
                <Text>{item.e && `E: ${item.e.value1}`}</Text>
                <Text>{item.pen && `P: ${item.pen.value1}`}</Text>
              </Box>
              <Flex justifyContent={"space-between"}>
                <Text>App</Text>
                <Text>{item.d.value2}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>AA</Text>
                <Text>{item.e.value2}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Team</Text>
                <Text>{item.total.value3}</Text>
              </Flex>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
export default AccordionResult;
