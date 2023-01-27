import AchievementItem from "@/component/AchievementItem";
import Emoji from "@/component/Emoji";
import MainHeading from "@/component/MainHeading";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FaAws, FaDocker, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
const Home = () => {
  return (
    <Container
      as="main"
      maxW="container.xl"
      paddingX={{ base: "6", md: "8" }}
      paddingY={{ base: "8", md: "14" }}
      display="flex">
      <Flex direction="column" paddingY="24">
        <MainHeading>Rosas Nahuel</MainHeading>
        <Text
          color="brown.600"
          display="block"
          fontSize="5xl"
          fontFamily="heading"
          fontWeight="bold"
          lineHeight="1.2">
          Full Stack Developer
        </Text>
        <Text
          marginTop="14"
          fontFamily="body"
          maxWidth="40rem"
          textAlign={"justify"}
          fontSize={{ base: "md", md: "xl" }}>
          I am a passionate developer <Emoji label="computer">💻</Emoji> focused
          on user experience <Emoji label="person raising hand">🙋‍♂️</Emoji> and
          code optimization. I strive to deliver high-quality work and
          constantly improve my skills<Emoji label="books">📚</Emoji>. I am
          dedicated to delivering exceptional results
          <Emoji label="first place medal">🥇</Emoji>.
        </Text>
        <Box marginTop={{ base: "8", md: "14" }} width="full">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: "5", md: "10" }}>
            <AchievementItem icon={FaReact}>React</AchievementItem>
            <AchievementItem icon={FaNodeJs}>Node.js</AchievementItem>
            <AchievementItem icon={FaPython}>Python</AchievementItem>
            <AchievementItem icon={FaDocker}>Docker</AchievementItem>
            <AchievementItem icon={FaAws}>AWS</AchievementItem>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
