import {
  Button,
  Flex,
  FlexProps,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

import CarouselButton from "./CarouselButtons";

const Carousel = ({
  ArrImg,
  FlexProps,
  isOpen,
  onOpen,
  onClose,
}: {
  ArrImg: { src: string; alt: string }[];
  FlexProps?: FlexProps;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(
    ArrImg.length > 1 ? Math.floor(Math.random() * ArrImg.length) : 0
  );
  const length = ArrImg.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ArrImg) || ArrImg.length <= 0) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg={"blackAlpha.800"}
        width={"fit-content"}
        minWidth={"50vw"}
        alignContent={"center"}
        justifyContent={"center"}>
        <ModalCloseButton
          color="base.50"
          bg={"pink.600"}
          textShadow="0 0 10px rgba(0,0,0,0.5)"
          onClick={onClose}
          _hover={{
            bg: "base.50",
            color: "pink.600",
          }}
          _active={{
            bg: "base.50",
            color: "pink.600",
          }}
        />
        <ModalBody>
          <Flex
            width={"100%"}
            transition={"all 0.2s"}
            alignContent={"center"}
            justifyContent={"center"}
            {...FlexProps}>
            <CarouselButton direction="left" onClick={prevSlide} />
            <Image
              src={ArrImg[current].src}
              alt={ArrImg[current].alt}
              height={"75vh"}
              objectFit={"contain"}
            />
            <CarouselButton direction="right" onClick={nextSlide} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Carousel;
