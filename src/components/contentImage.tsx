import { StyledText, NextLink, Image } from "@robust-ui/nextjs-components";

export function ContentImage({
  title,
  images,
  href,
}: {
  title: {
    [key: string]: string;
  };
  images: string[];
  href: string;
}) {
  return (
    <NextLink href={href} flexDirection="column" justifyContent="flexStart">
      <Image
        src={images[0]}
        alt="Project Image"
        p="0"
        height="50vh"
        optimizedWidth
        borderRadius="2.5vh"
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
        textColors={["mulberry", "white", "indigo"]}
        fontWeights={["900", "400", "900"]}
        multiLanguageSupport={title}
      />
    </NextLink>
  );
}
