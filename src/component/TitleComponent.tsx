import { Settings } from '@/Settings';
import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Titles = () => {
  return (
    <>
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
        {Settings.Name}
      </Heading>
      <Text
        color="pink.600"
        display="block"
        fontSize="5xl"
        fontFamily="heading"
        fontWeight="bold"
        textShadow="0 0 10px rgba(0,0,0,0.5)"
        lineHeight="1.2">
        {Settings.Profession}
      </Text>
    </>
  );
};
export default Titles;
