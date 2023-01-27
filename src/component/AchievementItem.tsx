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
      <Icon as={icon} fontSize="4xl" />
      <Text fontFamily="heading" fontSize="xl">
        {children}
      </Text>
    </HStack>
  );
};
export default AchievementItem;
