import { TAGS } from "@/consts";
import { Button, Flex, Tag } from "@chakra-ui/react";

const Tags = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex
        w={"100%"}
        pb={"24px"}
        justifyContent={"end"}
        lg={{ display: "none" }}
      >
        <Button
          bg={"#1A1635"}
          color={"#fff"}
          borderRadius={"8px"}
          p={"8px 16px"}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6667 1H1.33337L6.66671 7.30667V11.6667L9.33337 13V7.30667L14.6667 1Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Filter
        </Button>
      </Flex>
      <Flex gap={"16px"} flexWrap={"wrap"} lg={{ display: "none" }}>
        {TAGS.map((item) => {
          return (
            <>
              <Tag.Root
                size="sm"
                gap={"16px"}
                maxW="200px"
                fontSize={"14px"}
                bg={"#0A8BEC"}
                color={"#fff"}
                borderRadius={"78px"}
                shadow={"none"}
                padding={"4px 12px"}
              >
                <Tag.StartElement>
                  <Tag.CloseTrigger />
                </Tag.StartElement>
                <Tag.Label>{item}</Tag.Label>
              </Tag.Root>
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};
export default Tags;
