import {
  Header,
  StyledText,
  NextLink,
  Flex,
  Aside,
  useLanguage,
  Span,
  Menu,
} from "@robust-ui/nextjs-components";
export function Nav() {
  const [language, setLanguage] = useLanguage();
  return (
    <>
      <Header
        position="fixed"
        p="2vh"
        top="0"
        left="0"
        zIndex="100"
        optimizedWidth
        backgroundRaw="rgba(0,0,0,0.95)">
        <NextLink href="/" width="fitContent">
          <StyledText
            fontWeights={["400", "700"]}
            textColors={["white", "mulberry"]}
            fontSizeRaw={{ base: "3vh", md: "3vh" }}>
            Nahuel|Rosas
          </StyledText>
        </NextLink>
        <Flex
          display={{
            base: "none",
            md: "flex",
          }}
          mx="6vw"
          justifyContent="spaceBetween"
          optimizedWidth>
          <NextLink href="/projects#cover" width="fitContent">
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400"]}
              textColors={["white"]}
              fontSizeRaw={{ base: "2vh", md: "3vh" }}
              multiLanguageSupport={{
                en: "Projects",
                es: "Proyectos",
              }}
            />
          </NextLink>
          <NextLink href="/about-me#cover" width="fitContent">
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400"]}
              textColors={["white"]}
              fontSizeRaw={{ base: "2vh", md: "3vh" }}
              multiLanguageSupport={{
                en: "About",
                es: "Sobre mí",
              }}
            />
          </NextLink>
          <NextLink href="/articles#cover" width="fitContent">
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400"]}
              textColors={["white"]}
              fontSizeRaw={{ base: "2vh", md: "3vh" }}
              multiLanguageSupport={{
                en: "Articles",
                es: "Artículos",
              }}
            />
          </NextLink>
          <Menu
            propsButton={{
              color: "white",
              fontSizeRaw: { md: "2.5vh" },
              heading: {
                en: language.fullLanguage,
                es: language.fullLanguage,
              },
              fontWeight: "700",
              textTransform: "uppercase",
            }}
            flexDirection="row"
            gap="2vh">
            <Span
              pRaw="0.3vh"
              fontWeight="900"
              color="white"
              onClick={() => setLanguage("en")}
              fontSizeRaw={{ base: "2vh", md: "3vh" }}
              hover={{
                bg: "indigo",
                opacity: "0.8",
                color: "black",
              }}
              borderRadius="2.5vh"
              cursor="pointer"
              px="2vw">
              English
            </Span>
            <Span
              pRaw="0.3vh"
              fontWeight="900"
              color="white"
              cursor="pointer"
              onClick={() => setLanguage("es")}
              fontSizeRaw={{ base: "2vh", md: "3vh" }}
              hover={{
                bg: "indigo",
                opacity: "0.8",
                color: "black",
              }}
              borderRadius="2.5vh"
              px="2vw">
              Español
            </Span>
          </Menu>
        </Flex>
        <Aside
          display={{
            base: "flex",
            md: "none",
          }}
          propsIcon={{
            border: "none",
          }}>
          <NextLink href="/#cover" width="fitContent">
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400", "700"]}
              textColors={["white", "mulberry"]}
              fontSize="3vh"
              multiLanguageSupport={{
                en: "Home",
                es: "Inicio",
              }}
            />
          </NextLink>
          <NextLink href="/projects#cover" width="fitContent">
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400", "700"]}
              textColors={["white", "mulberry"]}
              fontSize="3vh"
              multiLanguageSupport={{
                en: "Projects",
                es: "Proyectos",
              }}
            />
          </NextLink>
          <NextLink href="/about-me#cover" width="fitContent">
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400", "700"]}
              textColors={["white", "mulberry"]}
              fontSize="3vh"
              multiLanguageSupport={{
                en: "About me",
                es: "Sobre mí",
              }}
            />
          </NextLink>
          <NextLink href="/articles#cover" width="fitContent">
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400", "700"]}
              textColors={["white", "mulberry"]}
              fontSize="3vh"
              multiLanguageSupport={{
                en: "Articles",
                es: "Artículos",
              }}
            />
          </NextLink>
          <Menu
            propsButton={{
              color: "white",
              fontSize: "3vh",
              heading: {
                en: language.fullLanguage,
                es: language.fullLanguage,
              },
              fontWeight: "700",
              textTransform: "uppercase",
            }}>
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400"]}
              textColors={["white"]}
              cursor="pointer"
              fontSize="3vh"
              onClick={() => setLanguage("en")}>
              English
            </StyledText>
            <StyledText
              pRaw="0.3vh"
              fontWeights={["400"]}
              textColors={["white"]}
              cursor="pointer"
              fontSize="3vh"
              onClick={() => setLanguage("es")}>
              Español
            </StyledText>
          </Menu>
        </Aside>
      </Header>
    </>
  );
}
