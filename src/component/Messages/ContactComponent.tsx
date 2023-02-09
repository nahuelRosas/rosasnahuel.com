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
  Button,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineMail, HiOutlinePencilAlt } from "react-icons/hi";

import useRecoveryData from "./useRecoveryData";

const ContactComponent = () => {
  const { returnErrors, onChangeForm, sentMessage, loading, form } =
    useRecoveryData();

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
      <Stack spacing="5" mt={5}>
        <Box w="100%" p="3">
          <Text
            fontFamily="heading"
            fontSize="2xl"
            mb={4}
            textShadow="0 0 10px rgba(0,0,0,0.5)">
            Name
          </Text>
          <InputGroup h="50px" justifyContent={"center"} alignItems={"center"}>
            <InputLeftElement
              pointerEvents="none"
              justifyContent={"center"}
              h="100%"
              fontSize={"2xl"}>
              <HiOutlinePencilAlt />
            </InputLeftElement>
            <Input
              w={"100%"}
              type="text"
              h="50px"
              name="name"
              border="4px"
              borderTop={"none"}
              borderLeft={"none"}
              value={form.name}
              borderRight={"none"}
              borderRadius="none"
              fontSize={"lg"}
              borderColor="pink.600"
              onChange={onChangeForm}
            />
            <InputRightElement
              pointerEvents="none"
              justifyContent={"center"}
              h="100%"
              color="red.500"
              w={"auot"}
              textAlign={"center"}
              fontSize={"lg"}>
              {returnErrors().name}
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box w="100%" p="3">
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
              h="100%"
              fontSize={"2xl"}>
              <HiOutlineMail />
            </InputLeftElement>
            <Input
              w={"100%"}
              type="text"
              h="50px"
              name="email"
              border="4px"
              borderTop={"none"}
              borderLeft={"none"}
              value={form.email}
              borderRight={"none"}
              borderRadius="none"
              fontSize={"lg"}
              borderColor="pink.600"
              onChange={onChangeForm}
            />
            <InputRightElement
              pointerEvents="none"
              justifyContent={"center"}
              h="100%"
              color="red.500"
              w={"auot"}
              textAlign={"center"}
              fontSize={"lg"}>
              {returnErrors().email}
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box w="100%" p="3">
          <Text
            fontFamily="heading"
            fontSize="2xl"
            mb={4}
            textShadow="0 0 10px rgba(0,0,0,0.5)">
            Message
          </Text>
          <Textarea
            w={"100%"}
            h="200px"
            name="message"
            border="4px"
            borderTop={"none"}
            value={form.message}
            borderLeft={"none"}
            borderRight={"none"}
            borderRadius="none"
            borderColor="pink.600"
            onChange={onChangeForm}
          />
        </Box>
        <Button
          w="100%"
          h="50px"
          fontSize="xl"
          colorScheme="pink"
          _hover={{ bg: "pink.700", color: "base.50" }}
          variant="outline"
          type="submit"
          isLoading={loading}
          onClick={() => {
            sentMessage();
          }}>
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactComponent;
