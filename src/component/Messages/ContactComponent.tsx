import {
  Box,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

import useRecoveryData from "./useRecoveryData";

const ContactComponent = () => {
  const { returnErrors, onChangeForm, onSubmitForm } = useRecoveryData();

  return (
    <Box
      as="section"
      pb={10}
      w="100%"
      h={"100%"}
      fontSize={{ base: "md", md: "xl" }}
      fontFamily="body">
      <Heading
        size="3xl"
        letterSpacing="tight"
        fontFamily="heading"
        fontWeight="bold"
        textAlign="left"
        textShadow="0 0 10px rgba(0,0,0,0.5)"
        color="pink.600">
        Contact Me
      </Heading>
      {/* <Stack spacing="5" mt={5}>
        <Box as="form" w="100%" p="3">
          <Text
            fontFamily="heading"
            fontSize="2xl"
            mb={4}
            textShadow="0 0 10px rgba(0,0,0,0.5)">
            Email address
          </Text>
          <InputGroup h="50px" justifyContent={"center"} alignItems={"center"}>
            <InputLeftElement
              pointerEvents="none"
              justifyContent={"center"}
              h="100%">
              <FaEnvelope />
            </InputLeftElement>
            <Input
              w={"100%"}
              type="email"
              h="50px"
              name="email"
              border="4px"
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderRadius="none"
              borderColor="pink.600"
              fontWeight={"bold"}
              onChange={onChangeForm}
              fontSize={"2xl"}
              fontFamily="body"
            />
            <InputRightElement
              h="100%"
              w="auto"
              cursor={"default"}
              justifyContent={"center"}
              alignItems={"center"}
              display={returnErrors().email ? "flex" : "none"}
              textShadow="0 0 10px rgba(0,0,0,0.5)">
              <Text
                color="pink.600"
                fontWeight={"normal"}
                fontSize={"2xl"}
                mr={2}
                fontFamily="body">
                {returnErrors().email}
              </Text>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box as="form" w="100%" p="3">
          <Text
            fontFamily="heading"
            fontSize="2xl"
            mb={4}
            textShadow="0 0 10px rgba(0,0,0,0.5)">
            Message
          </Text>
          <Textarea
            w={"100%"}
            h="300px"
            name="message"
            border="4px"
            borderTop={"none"}
            borderLeft={"none"}
            borderRight={"none"}
            borderRadius="none"
            borderColor="pink.600"
            fontWeight={"bold"}
            onChange={onChangeForm}
            fontSize={"2xl"}
            fontFamily="body"
          />
          <InputRightElement
            h="100%"
            w="auto"
            cursor={"default"}
            justifyContent={"center"}
            alignItems={"center"}
            display={returnErrors().message ? "flex" : "none"}
            textShadow="0 0 10px rgba(0,0,0,0.5)">
            <Text
              color="pink.600"
              fontWeight={"normal"}
              fontSize={"2xl"}
              mr={2}
              fontFamily="body">
              {returnErrors().message}
            </Text>
          </InputRightElement>
        </Box>
      </Stack> */}
    </Box>
  );
};

export default ContactComponent;
