import { useLanguage, Flex, StyledText } from "@robust-ui/nextjs-components";
import { ButtomLink } from "@/components/buttomLink";

export function Footer() {
  const [language] = useLanguage();
  return (
    <Flex
      tabIndex={-1}
      id="footer"
      justifyContent="center"
      backgroundRaw="black"
      py="6vh"
      mt="6vh"
      minWRaw="100vw"
      flexDirection="column">
      <StyledText
        py="0"
        optimizedWidth
        alignSelf="center"
        fontSizeRaw={{
          base: "3vh",
          md: "3vh",
        }}
        textAlign="center"
        textColors={["white", "mulberry"]}
        fontWeights={["400", "900"]}
        multiLanguageSupport={{
          en: "Get in touch",
          es: "Contacto",
        }}
      />

      <StyledText
        py="0"
        optimizedWidth
        alignSelf="center"
        fontSizeRaw={{
          base: "4vh",
          md: "7vh",
        }}
        textAlign="center"
        textColors={["white", "mulberry"]}
        fontWeights={["900", "900"]}
        multiLanguageSupport={{
          en: "Let’s work together",
          es: "Trabajemos juntos",
        }}
      />
      <StyledText
        py="0"
        px="6vw"
        mb="2vh"
        optimizedWidth
        alignSelf="center"
        fontSizeRaw={{
          base: "2vh",
          lg: "3vh",
        }}
        textAlign="center"
        textColors={["white", "mulberry"]}
        fontWeights={["400", "900"]}
        multiLanguageSupport={{
          en: `If you're envisioning a website or mobile app project or seeking guidance on product design, don't hesitate to reach out to me as a |full stack web developer|. I'm here to assist you in bringing your vision to life, whether you have a specific project in mind or simply want to discuss your ideas. Feel free to get in touch today!`,
          es: `Si estás imaginando un proyecto de sitio web o aplicación móvil o buscando orientación sobre diseño de productos, no dudes en contactarme como |desarrollador web full stack|. Estoy aquí para ayudarte a dar vida a tu visión, ya sea que tengas un proyecto específico en mente o simplemente quieras discutir tus ideas. ¡No dudes en ponerte en contacto hoy mismo!`,
        }}
      />

      {language.currentLanguage === "en" && (
        <ButtomLink
          href="https://api.whatsapp.com/send?phone=543835433924&text=Hello%2C%20I%27m%20talking%20to%20you%20because%20I%20saw%20your%20portfolio%2C%20can%20we%20arrange%20a%20meeting%3F"
          title={{ en: "Let's talk" }}
          iconType="whatsappFill"
        />
      )}

      {language.currentLanguage === "es" && (
        <ButtomLink
          href="https://api.whatsapp.com/send?phone=543835433924&text=Hola%2C%20te%20hablo%20porque%20vi%20tu%20portafolio%2C%20%C2%BFpodemos%20concertar%20una%20reuni%C3%B3n%3F"
          title={{ es: "Hablemos" }}
          iconType="whatsappFill"
        />
      )}

      <StyledText
        mt="3vh"
        py="0"
        optimizedWidth
        alignSelf="center"
        fontSizeRaw={{
          base: "1.5vh",
          md: "3vh",
        }}
        textAlign="center"
        textColors={["white", "mulberry"]}
        fontWeights={["400", "900"]}
        multiLanguageSupport={{
          en: `© ${new Date().getFullYear()} All rights reserved. Designed and coded by |Nahuel Rosas| using the Robust framework.`,
          es: `© ${new Date().getFullYear()} Todos los derechos reservados. Diseñado y codificado por |Nahuel Rosas| utilizando el framework Robust.`,
        }}
      />
    </Flex>
  );
}
