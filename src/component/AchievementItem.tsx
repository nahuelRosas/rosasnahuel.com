import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";

const AchievementItem = ({
  icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) => {
  return (
    <HStack spacing="3">
      <Icon as={icon} fontSize="4xl" color="pink.700" />
      <Text
        fontFamily="heading"
        fontSize="xl"
        textShadow="0 0 10px rgba(0,0,0,0.5)">
        {children}
      </Text>
    </HStack>
  );
};
export default AchievementItem;
