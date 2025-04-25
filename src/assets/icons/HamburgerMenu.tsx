import { Icon } from "@chakra-ui/react";

const HamburgerMenu = () => {
  return (
    <Icon width="23px" height="16px" viewBox="0 0 23 16">
      <svg
        width="23"
        height="16"
        viewBox="0 0 23 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8H22M1 1H22M1 15H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default HamburgerMenu;
