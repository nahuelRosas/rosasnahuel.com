import { Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import Slider from 'react-slick';

type CarouselButtonProps = {
  slider: Slider | null;
  type: string;
  display?: object;
};

const CarouselButton: React.FC<CarouselButtonProps> = ({
  slider,
  type,
  display,
}) => {
  const top = useBreakpointValue({ base: "100%", md: "50%" });
  const side = useBreakpointValue({ base: "50%", md: "10px" });

  return (
    <IconButton
      display={display}
      aria-label="left-arrow"
      color={"black"}
      bg={"pink.700"}
      isRound={true}
      position="absolute"
      left={type === "slickPrev" ? side : "auto"}
      right={type === "slickNext" ? side : "auto"}
      _hover={{
        bg: "base.300",
        color: "gray.50",
      }}
      _active={{
        bg: "base.300",
        color: "gray.50",
      }}
      top={top}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      onClick={() =>
        type === "slickPrev" ? slider?.slickPrev() : slider?.slickNext()
      }>
      {type === "slickPrev" ? (
        <Icon as={FiArrowLeftCircle} w={6} h={6} />
      ) : (
        <Icon as={FiArrowRightCircle} w={6} h={6} />
      )}
    </IconButton>
  );
};
export default CarouselButton;
