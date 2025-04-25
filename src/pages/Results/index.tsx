import { Center } from "@chakra-ui/react";
import Segment from "./_components/SegmentCustom";
import { Apparatus } from "./_components/Apparatus";
import ResultTable from "./_components/ResultTable";
import Tags from "./_components/Tags";
import AccordionResult from "./_components/Accordion";

const Results = () => {
  return (
    <>
      <Center gap={"20px"} mb={"48px"}>
        <Segment items={["MAG", "WAG"]} />
        <Segment items={["Qualification", "Final"]} />
        <Segment items={["Apparatus", "Team", "All-around"]} />
        <Segment items={["Seniors", "Juniors"]} />
      </Center>
      <Tags />
      <Apparatus />
      <AccordionResult />
      <ResultTable />
    </>
  );
};
export default Results;
