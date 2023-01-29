import { Box, Center, Flex, FlexProps } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import CarouselButton from "./CarouselButtons";

type CarouselProps = {
  children: React.ReactNode;
  settings?: object;
  carouselProps?: FlexProps;
};

export const configDefault = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  settings = configDefault,
  carouselProps,
}) => {
  const [slider, setSlider] = useState<Slider | null>(null);

  return (
    <Center w={"100%"} h={"auto"} overflow={"hidden"} {...carouselProps}>
      <Box position={"relative"} maxW={"100%"}>
        <CarouselButton
          slider={slider}
          type={"slickPrev"}
          display={{ base: "none", md: "flex" }}
        />
        <CarouselButton
          slider={slider}
          type={"slickNext"}
          display={{ base: "none", md: "flex" }}
        />
        <Slider ref={(c) => setSlider(c)} {...settings}>
          {children}
        </Slider>
      </Box>
    </Center>
  );
};

export default Carousel;
