import AchievementItem from "@/component/AchievementItem";
import Emoji from "@/component/Emoji";
import LinkItem from "@/component/LinkItem";
import MainHeading from "@/component/MainHeading";
import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Container,
  Flex,
  Text,
  Image,
  Heading,
  Grid,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaAws,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

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
          color="pink.600"
          display="block"
          fontSize="5xl"
          fontFamily="heading"
          fontWeight="bold"
          textShadow="0 0 10px rgba(0,0,0,0.5)"
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
          <Grid
            maxW={{ base: "full", md: "60rem" }}
            gap={{ base: "5", md: "10" }}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            }}>
            <AchievementItem icon={FaReact}>React</AchievementItem>
            <AchievementItem icon={FaNodeJs}>Node.js</AchievementItem>
            <AchievementItem icon={FaPython}>Python</AchievementItem>
            <AchievementItem icon={FaDocker}>Docker</AchievementItem>
            <AchievementItem icon={FaAws}>AWS</AchievementItem>
            <AchievementItem icon={SiFirebase}>Firebase</AchievementItem>
          </Grid>
        </Box>
        <Flex
          paddingY="vGutter"
          gap={{ base: "5", lg: "20" }}
          justify="space-between"
          direction={{ base: "column", lg: "row" }}>
          <Center maxWidth={{ lg: "60rem" }}>
            <Circle
              position={"relative"}
              size="15.25rem"
              float="left"
              marginRight="6"
              shadow={"2xl"}
              overflow="hidden"
              zIndex="1">
              <Image
                alt="Nahuel Rosas"
                shadow={"2xl"}
                src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674687359/Avatar/95kZz15AzJQQQQqNPQJCjzaLWhD2.webp"
                objectFit="cover"
                width="full"
                height="full"
              />
            </Circle>
          </Center>
          <Box>
            <Text
              fontFamily="body"
              fontSize={{ base: "2xl", md: "5xl" }}
              lineHeight="1.2">
              <Box
                color="pink.600"
                fontFamily="heading"
                fontWeight="bold"
                textShadow="0 0 10px rgba(0,0,0,0.5)"
                display="inline-block">
                I craft visually stunning,
              </Box>
              <Box
                fontFamily="heading"
                textShadow="0 0 10px rgba(0,0,0,0.5)"
                fontWeight="light"
                display="inline-block">
                user-friendly websites
              </Box>
              <Box
                fontFamily="heading"
                fontWeight="bold"
                textShadow="0 0 10px rgba(0,0,0,0.5)"
                color="pink.600"
                display="inline-block">
                that leave a lasting impression.
              </Box>
            </Text>
            <Box
              maxWidth={{ base: "full", lg: "60rem" }}
              marginTop={{ base: "8", lg: "10" }}>
              <Text
                fontFamily="body"
                fontSize={{ base: "md", md: "xl" }}
                textAlign={"justify"}>
                As a web developer, I specialize in creating{" "}
                <Emoji label="computer">💻</Emoji> component systems that are
                not only functional, but also visually pleasing
                <Emoji label="art">🎨</Emoji> and user-friendly. My goal is to
                design websites that leave a lasting impression on visitors and
                effectively communicate a brand{"'"}s message{" "}
                <Emoji label="speech balloon">💬</Emoji>. Whether it{"'"}s a
                simple brochure website <Emoji label="page with curl">📄</Emoji>{" "}
                or a complex web application, I have the skills and expertise to
                bring your vision to life <Emoji label="rocket">🚀</Emoji>.
              </Text>
            </Box>
          </Box>
        </Flex>
        <Flex
          gap={{ base: "5", lg: "20" }}
          direction={{ base: "column", lg: "row" }}
          justify="center">
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
              lg: 3,
            }}
            gap={{ base: "5", md: "10" }}
            maxWidth="60rem"
            justifyItems="center">
            <LinkItem
              icon={FaLinkedin}
              href="https://www.linkedin.com/in/nahuelrosas/">
              LinkedIn
            </LinkItem>
            <LinkItem icon={FaGithub} href="https://github.com/nahuelRosas">
              GitHub
            </LinkItem>
            <LinkItem
              icon={FaEnvelope}
              href="mailto:nahuel.rosas@mi.unc.edu.ar">
              Email
            </LinkItem>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
