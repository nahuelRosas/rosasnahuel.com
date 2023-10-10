import {
  Icon,
  NextLink,
  StyledText,
  Ticon,
} from "@robust-ui/nextjs-components";
export function ButtomLink({
  href,
  title,
  iconType,
}: {
  href: string;
  title: {
    [key: string]: string;
  };
  iconType: Ticon;
}) {
  if (!href) return null;

  return (
    <NextLink
      href={href}
      cursor="pointer"
      width="fitContent"
      color="mulberry"
      hover={{
        background: "mulberry",
        color: "white",
      }}
      borderRadius="1.5vh"
      p="1vh">
      <Icon
        icon={iconType}
        sizeRaw={{
          base: "4vh",
          md: "5vh",
        }}
      />
      <StyledText
        py="0"
        px="1vh"
        alignSelf="center"
        fontSizeRaw={{
          base: "2vh",
          md: "3.5vh",
        }}
        textAlign="justify"
        textShadow={{
          x: "0.3vh",
          y: "-0.2vh",
          blur: "0.2vh",
          color: "black",
        }}
        textColors={["white"]}
        fontWeights={["900"]}
        multiLanguageSupport={title}
      />
    </NextLink>
  );
}
