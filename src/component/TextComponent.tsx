import { Text } from "@chakra-ui/react";
import React from "react";

const TextComponent = (props: React.ComponentProps<typeof Text>) => {
  console.log(props.children);
  return (
    <Text
      marginTop="14"
      fontFamily="body"
      maxWidth="65%"
      textAlign={"justify"}
      fontSize={{ base: "md", md: "xl" }}>
      {props.children}
    </Text>
  );
};

export default TextComponent;
