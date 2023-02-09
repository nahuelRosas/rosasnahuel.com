import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  Icon,
  Img,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

import Carousel from "./Carousel";

type ProjectItemProps = {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  index: number;
  deploy: string;
  repository: string;
};

const ProjectItem: React.FC<ProjectItemProps> = (props: ProjectItemProps) => {
  const Rand =
    props.images.length > 1
      ? Math.floor(Math.random() * props.images.length)
      : 0;

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (props.index % 2 === 0) {
    return (
      <>
        <Carousel
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          ArrImg={props.images}
        />
        <Grid
          width="100%"
          height="100%"
          bg="transparent"
          borderRadius="lg"
          padding="1"
          boxShadow="xl"
          borderColor={props.deploy ? "blackAlpha.800" : "gray.700"}
          transition="all 0.2s"
          shadow="2xl"
          alignContent={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          templateColumns={{ base: "1fr", md: "3fr 1fr" }}>
          <Grid
            padding="6"
            templateRows={{ base: "1fr", md: "auto auto auto" }}>
            <Heading
              fontSize="5xl"
              color="white"
              textShadow="0 0 10px rgba(0,0,0,1)"
              fontWeight="bold"
              fontFamily="heading"
              marginBottom="4"
              textAlign="justify"
              cursor={"pointer"}
              onClick={() => {
                window.open(props.deploy, "_blank");
                return false;
              }}
              _hover={{
                textDecoration: "underline",
              }}
              _active={{
                textDecoration: "underline",
              }}
              _focus={{
                textDecoration: "underline",
              }}>
              {props.title}
            </Heading>
            <Text
              fontSize="xl"
              color="white"
              textShadow="0 0 10px rgba(0,0,0,0.5)"
              fontWeight="light"
              fontFamily="heading"
              marginTop="4"
              textAlign="justify">
              {props.description}
            </Text>
            <ButtonGroup>
              <Button
                leftIcon={<Icon as={TfiWorld} />}
                color={"black"}
                bg={"pink.600"}
                textShadow="0 0 10px rgba(0,0,0,0.5)"
                onClick={() => {
                  window.open(props.deploy, "_blank");
                  return false;
                }}
                _hover={{
                  bg: "base.50",
                  color: "pink.600",
                }}
                _active={{
                  bg: "base.50",
                  color: "pink.600",
                }}>
                Visit the project
              </Button>
              <Button
                leftIcon={<Icon as={FaGithubAlt} />}
                color={"black"}
                bg={"pink.600"}
                onClick={() => {
                  window.open(props.repository, "_blank");
                  return false;
                }}
                textShadow="0 0 10px rgba(0,0,0,0.5)"
                _hover={{
                  bg: "base.50",
                  color: "pink.600",
                }}
                _active={{
                  bg: "base.50",
                  color: "pink.600",
                }}>
                View the code
              </Button>
            </ButtonGroup>
          </Grid>
          <Flex alignContent="center" justifyContent="center">
            <Img
              src={props.images[Rand].src}
              alt={props.images[Rand].alt}
              borderRadius="lg"
              height={"25rem"}
              objectPosition="center"
              objectFit={"cover"}
              loading="lazy"
              onClick={onOpen}
              cursor="pointer"
            />
          </Flex>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Carousel
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          ArrImg={props.images}
        />
        <Grid
          width="100%"
          height="100%"
          bg="transparent"
          borderRadius="lg"
          padding="1"
          boxShadow="xl"
          borderColor={props.deploy ? "blackAlpha.800" : "gray.700"}
          transition="all 0.2s"
          shadow="2xl"
          alignContent={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          templateColumns={{ base: "1fr", md: "1fr 3fr" }}>
          <Flex alignContent="center" justifyContent="center">
            <Img
              src={props.images[Rand].src}
              alt={props.images[Rand].alt}
              borderRadius="lg"
              height={"25rem"}
              objectPosition="center"
              objectFit={"cover"}
              loading="lazy"
              onClick={onOpen}
              cursor="pointer"
            />
          </Flex>
          <Grid
            padding="6"
            templateRows={{ base: "1fr", md: "auto auto auto" }}>
            <Heading
              fontSize="5xl"
              color="white"
              textShadow="0 0 10px rgba(0,0,0,1)"
              fontWeight="bold"
              fontFamily="heading"
              marginBottom="4"
              textAlign="justify"
              cursor={"pointer"}
              onClick={() => {
                window.open(props.deploy, "_blank");
                return false;
              }}
              _hover={{
                textDecoration: "underline",
              }}
              _active={{
                textDecoration: "underline",
              }}
              _focus={{
                textDecoration: "underline",
              }}>
              {props.title}
            </Heading>
            <Text
              fontSize="xl"
              color="white"
              textShadow="0 0 10px rgba(0,0,0,0.5)"
              fontWeight="light"
              fontFamily="heading"
              marginTop="4"
              textAlign="justify">
              {props.description}
            </Text>
            <ButtonGroup>
              <Button
                leftIcon={<Icon as={TfiWorld} />}
                color={"black"}
                bg={"pink.600"}
                textShadow="0 0 10px rgba(0,0,0,0.5)"
                onClick={() => {
                  window.open(props.deploy, "_blank");
                  return false;
                }}
                _hover={{
                  bg: "base.50",
                  color: "pink.600",
                }}
                _active={{
                  bg: "base.50",
                  color: "pink.600",
                }}>
                Visit the project
              </Button>
              <Button
                leftIcon={<Icon as={FaGithubAlt} />}
                color={"black"}
                bg={"pink.600"}
                onClick={() => {
                  window.open(props.repository, "_blank");
                  return false;
                }}
                textShadow="0 0 10px rgba(0,0,0,0.5)"
                _hover={{
                  bg: "base.50",
                  color: "pink.600",
                }}
                _active={{
                  bg: "base.50",
                  color: "pink.600",
                }}>
                View the code
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </>
    );
  }
};

export default ProjectItem;
