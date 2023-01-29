import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";

type ProjectItemProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ProjectItem: React.FC<ProjectItemProps> = (props: ProjectItemProps) => {
  return (
    <Grid
      as="a"
      padding="6"
      borderRadius="lg"
      borderWidth="1px"
      boxShadow="lg"
      bg="pink.800"
      borderColor={props.link ? "blackAlpha.800" : "gray.700"}
      transition="all 0.2s"
      shadow="2xl"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "2xl",
      }}
      templateColumns={{ base: "1fr", md: "1fr 3fr" }}>
      <Carousel>
        <Image w={"auto"} src={props.image} alt={props.title} />
      </Carousel>

      <Box padding="6">
        <Heading
          fontSize="5xl"
          color="white"
          textShadow="0 0 10px rgba(0,0,0,0.5)"
          fontWeight="bold"
          fontFamily="heading"
          marginBottom="4"
          textAlign="justify"
          cursor={"pointer"}
          onClick={() => {
            window.open(props.link, "_blank");
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

        {props.link && (
          <Text
            fontSize="xl"
            color="white"
            textShadow="0 0 10px rgba(0,0,0,0.5)"
            fontWeight="light"
            fontFamily="heading"
            cursor={"pointer"}
            marginTop="4"
            onClick={() => {
              window.open(props.link, "_blank");
              return false;
            }}
            textAlign="justify">
            Visit the project
          </Text>
        )}
      </Box>
    </Grid>
  );
};

export default ProjectItem;
