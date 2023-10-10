import { StyledText } from "@robust-ui/nextjs-components";

export function CreateTextBlock({
  title,
  content,
}: {
  title?: {
    [key: string]: string;
  };
  content?: {
    [key: string]: string;
  };
}) {
  return (
    <>
      <StyledText
        py="0"
        mb="1wrem"
        mx="1.5rem"
        optimizedWidth
        alignSelf="center"
        fontSizeRaw={{
          base: "2.5vh",
        }}
        textAlign={{
          base: "left",
          md: "justify",
        }}
        textShadow={{
          x: "2px",
          y: "-1px",
          blur: "2px",
          color: "black",
        }}
        textColors={["mulberry", "white"]}
        fontWeights={["500"]}
        multiLanguageSupport={title}
      />
      <StyledText
        py="0"
        mb="2rem"
        mx="1.5rem"
        optimizedWidth
        alignSelf="center"
        fontSize="2vh"
        lineHeight="1.2 rem"
        textAlign={{
          base: "left",
          md: "justify",
        }}
        textShadow={{
          x: "2px",
          y: "-1px",
          blur: "2px",
          color: "black",
        }}
        textColors={["white", "mulberry"]}
        fontWeights={["300", "900"]}
        multiLanguageSupport={content}
      />
    </>
  );
}
