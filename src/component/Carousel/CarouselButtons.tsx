import { Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const CarouselButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => {
  const top = useBreakpointValue({ base: "100%", md: "50%" });
  const side = useBreakpointValue({ base: "50%", md: "10px" });

  return (
    <IconButton
      aria-label="left-arrow"
      color={"black"}
      bg={"pink.600"}
      isRound={true}
      position="absolute"
      left={direction === "left" ? side : "auto"}
      right={direction === "right" ? side : "auto"}
      _hover={{
        bg: "base.50",
        color: "pink.600",
      }}
      _active={{
        bg: "base.50",
        color: "pink.600",
      }}
      top={top}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      onClick={onClick}>
      {direction === "left" ? (
        <Icon as={FiArrowLeftCircle} w={6} h={6} />
      ) : (
        <Icon as={FiArrowRightCircle} w={6} h={6} />
      )}
    </IconButton>
  );
};
export default CarouselButton;
