import { LIVE_TABLE } from "@/consts";
import { Badge, Flex, Image, Table, Text } from "@chakra-ui/react";

const LiveTable = () => {
  return (
    <Table.Root
      size="lg"
      mt={"48px"}
      lg={{ mt: "96px", display: "table" }}
      display={"none"}
    >
      <Table.Header>
        <Table.Row
          bg={"transparent"}
          color={"#fff"}
          borderBottom="1px solid transparent"
          borderRadius="md"
          background="linear-gradient(#080915, #080915) padding-box, linear-gradient(90deg, #080915 0%  , rgba(106, 33, 244, 0.9) 100%) border-box"
        >
          <Table.ColumnHeader
            border={"none"}
            color={"#fff"}
          ></Table.ColumnHeader>
          <Table.ColumnHeader
            border={"none"}
            color={"#fff"}
          ></Table.ColumnHeader>
          <Table.ColumnHeader
            border={"none"}
            color={"#fff"}
          ></Table.ColumnHeader>
          <Table.ColumnHeader
            border={"none"}
            color={"#fff"}
            w={"30%"}
          ></Table.ColumnHeader>
          <Table.ColumnHeader
            border={"none"}
            color={"#fff"}
          ></Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"}>
            App
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"}>
            AA
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"} textAlign="end">
            Team
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {LIVE_TABLE.map((item) => (
          <Table.Row
            key={item.id}
            background="linear-gradient(#080915, #080915) padding-box, linear-gradient(90deg, #080915 0%  , rgba(106, 33, 244, 0.9) 100%) border-box"
            color={"#fff"}
            borderBottom="1px solid transparent"
            borderRadius="md"
          >
            <Table.Cell border={"none"}>
              <Image src={item.img} />
            </Table.Cell>
            <Table.Cell border={"none"} textWrap={"nowrap"}>
              {item.flag + " " + item.country}
            </Table.Cell>
            <Table.Cell border={"none"}>{item.bib}</Table.Cell>
            <Table.Cell border={"none"}>{item.name}</Table.Cell>
            <Table.Cell border={"none"}>
              {!item.d && item.status && (
                <>
                  <Badge
                    size={"lg"}
                    color={"#fff"}
                    p={"4px 32px"}
                    bg={item?.status === "Wait" ? "#F5A100" : "#02D169"}
                  >
                    {item.status}
                  </Badge>
                </>
              )}
              <Flex alignItems={"center"} gap={"28px"}>
                <Text>{item.d && `D: ${item.d}`}</Text>
                <Text>{item.e && `E: ${item.e}`}</Text>
                <Text>{item.pen && `P: ${item.pen}`}</Text>
              </Flex>
            </Table.Cell>
            <Table.Cell border={"none"}>
              <Flex alignItems={"center"} gap={"4px"}>
                {item.app && (
                  <>
                    <Text>{item.app?.value}</Text>
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
                  </>
                )}
              </Flex>
            </Table.Cell>
            <Table.Cell border={"none"}>
              <Flex alignItems={"center"} gap={"4px"}>
                {item.aa && (
                  <>
                    <Text>{item.aa?.value}</Text>
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
                  </>
                )}
              </Flex>
            </Table.Cell>
            <Table.Cell border={"none"} textAlign="end">
              <Flex alignItems={"center"} gap={"4px"}>
                {item.team && (
                  <>
                    <Text>{item.team?.value}</Text>
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
                  </>
                )}
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}

        <Table.Row
          key={LIVE_TABLE[5].id}
          background="linear-gradient(#080915, #080915) padding-box, linear-gradient(90deg, #080915 0%  , rgba(106, 33, 244, 0.9) 100%) border-box"
          color={"#fff"}
          borderBottom="1px solid transparent"
          borderRadius="md"
        >
          <Table.Cell
            border={"none"}
            color={"#FF9C07"}
            fontSize={"20px"}
            textWrap={"nowrap"}
          >
            Inquiry Submitted
          </Table.Cell>
          <Table.Cell border={"none"}>
            <Image src={LIVE_TABLE[5].img} />
          </Table.Cell>
          <Table.Cell border={"none"} textWrap={"nowrap"}>
            {LIVE_TABLE[5].flag + " " + LIVE_TABLE[5].country}
          </Table.Cell>
          <Table.Cell border={"none"}>
            {LIVE_TABLE[5].bib + "  " + LIVE_TABLE[5].name}
          </Table.Cell>
          <Table.Cell border={"none"}>
            {!LIVE_TABLE[5].d && LIVE_TABLE[5].status && (
              <>
                <Badge
                  size={"lg"}
                  color={"#fff"}
                  p={"4px 32px"}
                  bg={LIVE_TABLE[5]?.status === "Wait" ? "#F5A100" : "#02D169"}
                >
                  {LIVE_TABLE[5].status}
                </Badge>
              </>
            )}
            <Flex alignItems={"center"} gap={"28px"} textWrap={"nowrap"}>
              <Text>{LIVE_TABLE[5].d && `D: ${LIVE_TABLE[5].d}`}</Text>
              <Text>{LIVE_TABLE[5].e && `E: ${LIVE_TABLE[5].e}`}</Text>
              <Text>{LIVE_TABLE[5].pen && `P: ${LIVE_TABLE[5].pen}`}</Text>
            </Flex>
          </Table.Cell>
          <Table.Cell border={"none"}>
            <Flex alignItems={"center"} gap={"4px"}>
              {LIVE_TABLE[5].app && (
                <>
                  <Text>{LIVE_TABLE[5].app?.value}</Text>
                  <Text
                    background={"#0A8BEC"}
                    w={"32px"}
                    height={"32px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {LIVE_TABLE[5].app?.rank}
                  </Text>
                </>
              )}
            </Flex>
          </Table.Cell>
          <Table.Cell border={"none"}>
            <Flex alignItems={"center"} gap={"4px"}>
              {LIVE_TABLE[5].aa && (
                <>
                  <Text>{LIVE_TABLE[5].aa?.value}</Text>
                  <Text
                    background={"#0A8BEC"}
                    w={"32px"}
                    height={"32px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {LIVE_TABLE[5].aa?.rank}
                  </Text>
                </>
              )}
            </Flex>
          </Table.Cell>
          <Table.Cell border={"none"} textAlign="end">
            <Flex alignItems={"center"} gap={"4px"}>
              {LIVE_TABLE[5].team && (
                <>
                  <Text>{LIVE_TABLE[5].team?.value}</Text>
                  <Text
                    background={"#0A8BEC"}
                    w={"32px"}
                    height={"32px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {LIVE_TABLE[5].team?.rank}
                  </Text>
                </>
              )}
            </Flex>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default LiveTable;
