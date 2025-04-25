import { RESULTS_TABLE } from "@/consts";
import { Table, Text } from "@chakra-ui/react";

const ResultTable = () => {
  return (
    <Table.Root
      size="lg"
      mt={"96px"}
      display={"none"}
      lg={{ display: "table" }}
    >
      <Table.Header>
        <Table.Row
          bg={"transparent"}
          color={"#fff"}
          borderBottom="1px solid transparent"
          borderRadius="md"
          background="linear-gradient(#080915, #080915) padding-box, linear-gradient(90deg, #080915 0%  , rgba(106, 33, 244, 0.9) 100%) border-box"
        >
          <Table.ColumnHeader border={"none"} color={"#fff"}>
            Rank
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"}>
            Team
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"}>
            Bib
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"} w={"35%"}>
            Name
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"}>
            D
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"}>
            E
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"}>
            Pen
          </Table.ColumnHeader>
          <Table.ColumnHeader border={"none"} color={"#fff"} textAlign="end">
            Total
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {RESULTS_TABLE.map((item) => (
          <Table.Row
            className="responsiveTable"
            key={item.id}
            background="linear-gradient(#080915, #080915) padding-box, linear-gradient(90deg, #080915 0%  , rgba(106, 33, 244, 0.9) 100%) border-box"
            color={"#fff"}
            borderBottom="1px solid transparent"
            borderRadius="md"
          >
            <Table.Cell border={"none"} verticalAlign={"text-top"}>
              <Text
                background={"#0A8BEC"}
                w={"32px"}
                height={"32px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {item.rank}
              </Text>
            </Table.Cell>
            <Table.Cell
              border={"none"}
              verticalAlign={"text-top"}
              textWrap={"nowrap"}
            >
              {item.flag + " " + item.team}
            </Table.Cell>
            <Table.Cell border={"none"} verticalAlign={"text-top"}>
              {item.bib}
            </Table.Cell>
            <Table.Cell border={"none"} verticalAlign={"text-top"}>
              {item.name}
            </Table.Cell>
            <Table.Cell border={"none"} verticalAlign={"text-top"}>
              <Text>{item.d.value1}</Text>
              <Text>{item.d.value2}</Text>
            </Table.Cell>
            <Table.Cell border={"none"} verticalAlign={"text-top"}>
              <Text>{item.e.value1}</Text>
              <Text>{item.e.value2}</Text>
            </Table.Cell>
            <Table.Cell border={"none"} verticalAlign={"text-top"}>
              <Text>{item.pen.value1}</Text>
              <Text>{item.pen.value2}</Text>
              <Text>Score</Text>
            </Table.Cell>
            <Table.Cell
              border={"none"}
              textAlign="end"
              verticalAlign={"text-top"}
            >
              <Text>{item.total.value1}</Text>
              <Text>{item.total.value2}</Text>
              <Text color={"#FF9C07"}>{item.total.value3}</Text>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default ResultTable;
