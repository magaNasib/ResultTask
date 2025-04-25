import { SegmentGroup } from "@chakra-ui/react";

const Segment = ({ items }: { items: string[] }) => {
  return (
    <SegmentGroup.Root
      display={"none"}
      lg={{ display: "flex" }}
      defaultValue={items[0]}
      bg={"#080915"}
      border={"1px solid #1A1635"}
      colorPalette="purple"
    >
      <SegmentGroup.Indicator bg={"none"} />
      <SegmentGroup.Items
        items={items}
        transitionBehavior={"red"}
        _checked={{ bg: "#1A1635" }}
        padding={"12px 30px"}
        lineHeight={"24px"}
        color={"#D9D9D9"}
        _before={{ bg: "none" }}
        cursor={"pointer"}
        fontWeight={"400"}
        fontSize={"16px"}
      />
    </SegmentGroup.Root>
  );
};
export default Segment;
