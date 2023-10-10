import {
  Block,
  Flex,
  Grid,
  StyledText,
  NextLink,
} from "@robust-ui/nextjs-components";

import { ContentText } from "./contentText";
import { ContentImage } from "./contentImage";

export function Section({
  id,
  title,
  text,
  header,
  contentText,
  contentImage,
  children,
  headerUrl,
}: {
  id: string;
  header?: {
    [key: string]: string;
  };
  title?: {
    [key: string]: string;
  };
  text?: {
    [key: string]: string;
  };
  contentText?: {
    title: {
      [key: string]: string;
    };
    text: {
      [key: string]: string;
    };
    href?: string;
  }[];
  contentImage?: {
    title: {
      [key: string]: string;
    };
    images: string[];
    href: string;
  }[];
  children?: React.ReactNode;
  headerUrl?: string;
}) {
  return (
    <Block pt="6vh" tabIndex={-1} id={id} widthRaw="100vw">
      <Flex
        widthRaw={{ base: "calc(100vw - 12vw)", md: "calc(100vw - 6vw)" }}
        backgroundRaw="rgba(0,0,0,0.6)"
        borderRadius="2.5vh"
        justifyContent="center"
        mx={{
          base: "6vw",
          md: "3vw",
        }}
        pb="3vh"
        overflow="hidden"
        flexDirection="column">
        {header && headerUrl && (
          <NextLink
            href={headerUrl}
            px={{
              base: "6vw",
              md: "3vw",
            }}
            pt="3vh"
            cursor="pointer"
            alignSelf="flexStart">
            <StyledText
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
              textColors={["white", "mulberry"]}
              fontWeights={["500", "900"]}
              multiLanguageSupport={header}
            />
          </NextLink>
        )}
        {(title || text) && (
          <Flex
            flexDirection="column"
            optimizedWidth
            pt={!header && !headerUrl ? "3vh" : "0"}>
            {title && (
              <StyledText
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "4vh",
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
                px={{
                  base: "6vw",
                  md: "3vw",
                }}
              />
            )}
            {text && (
              <StyledText
                mt="3vh"
                p="0"
                px={{
                  base: "6vw",
                  md: "3vw",
                }}
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
            )}
          </Flex>
        )}
        {contentText && (
          <Grid
            optimizedWidth
            px={{
              base: "6vw",
              md: "3vw",
            }}
            pt="3vh"
            gridTemplateColumns={{
              base: "auto",
              md: "auto auto",
            }}
            gap="3vh">
            {contentText.map((content, index) => (
              <ContentText
                key={index}
                title={content.title}
                text={content.text}
              />
            ))}
          </Grid>
        )}
        {contentImage && (
          <Grid
            optimizedWidth
            px={{
              base: "6vw",
              md: "3vw",
            }}
            pt="3vh"
            gridTemplateColumns={{
              base: "1fr",
              md: "1fr 1fr",
            }}
            gap="3vh">
            {contentImage.map((content, index) => (
              <ContentImage
                key={index}
                title={content.title}
                images={content.images}
                href={content.href}
              />
            ))}
          </Grid>
        )}
        {children}
      </Flex>
    </Block>
  );
}
