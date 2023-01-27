import { Heading } from "@chakra-ui/react";
import React from "react";

type MainHeadingProps = {
  children: React.ReactNode;
};

const MainHeading: React.FC<MainHeadingProps> = (props: MainHeadingProps) => {
  return (
    <Heading
      as="h1"
      width="full"
      fontFamily="heading"
      fontSize={{ base: "4rem", md: "7rem" }}
      letterSpacing="tight"
      lineHeight="1"
      userSelect="none"
      color="white"
      marginBottom="4"
      textShadow="0 0 10px rgba(0,0,0,0.5)">
      {props.children}
    </Heading>
  );
};
export default MainHeading;
