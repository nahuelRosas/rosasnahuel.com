import { Flex, StyledText } from "@robust-ui/nextjs-components";

export function ContentText({
  title,
  text,
}: {
  title?: {
    [key: string]: string;
  };
  text?: {
    [key: string]: string;
  };
}) {
  return (
    <Flex flexDirection="column">
      <StyledText
        mt="3vh"
        p="0"
        optimizedWidth
        alignSelf="center"
        fontSizeRaw={{
          base: "3.5vh",
          md: "6vh",
        }}
        textAlign={{
          base: "left",
          md: "left",
        }}
        textShadow={{
          x: "0.3vh",
          y: "-0.2vh",
          blur: "0.2vh",
          color: "black",
        }}
        textColors={["white", "mulberry", "white", "indigo"]}
        fontWeights={["900"]}
        multiLanguageSupport={title}
      />
      <StyledText
        mt="3vh"
        p="0"
        optimizedWidth
        alignSelf="center"
        fontSizeRaw={{
          base: "2.5vh",
          md: "3vh",
        }}
        textAlign={{
          base: "left",
          md: "left",
        }}
        textShadow={{
          x: "0.3vh",
          y: "-0.2vh",
          blur: "0.2vh",
          color: "black",
        }}
        textColors={["white", "mulberry", "white", "indigo"]}
        fontWeights={["400", "900", "400", "900"]}
        multiLanguageSupport={text}
      />
    </Flex>
  );
}
