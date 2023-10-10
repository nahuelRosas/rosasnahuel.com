import { Section } from "@/components/section";
import { Cover } from "@robust-ui/nextjs-components";

export default function Index() {
  const cover = {
    title: {
      en: "Exploring the Tech World with |In-Depth Articles|",
      es: "Explorando el Mundo de la Tecnología con |Artículos en Profundidad|",
    },
    text: {
      en: "Join me on a journey through the latest trends, insights, and discoveries in the tech world. From coding tips to industry analysis, my articles serve as a valuable resource for both newcomers and seasoned professionals. Let's dive into the realm of knowledge together.",
      es: "Acompáñame en un viaje a través de las últimas tendencias, perspicacias y descubrimientos en el mundo de la tecnología. Desde consejos de codificación hasta análisis de la industria, mis artículos son un recurso valioso tanto para principiantes como para profesionales experimentados. Sumergámonos juntos en el mundo del conocimiento.",
    },
  };

  const articles = [
    {
      title: {
        en: "Conquering the EACCES Error: | Installing Libraries on Linux Made Easy",
        es: "Venciendo el Error EACCES: | Instalación de Bibliotecas en Linux de Forma Sencilla",
      },
      images: [
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684810747172_bguk3p.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684812922488_nx5g16.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684819760366_injzed.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684813805753_sq5pry.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169561/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684819556321_ric2xx.webp",
      ],
      href: "/articles/eacces-error",
    },
    {
      title: {
        en: "Demystifying Robust: | Building Your Own React Component Library (Advanced TypeScript)",
        es: "Desmitificando Robust: | Construyendo su propia biblioteca de componentes React (TypeScript avanzado)",
      },
      images: [
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169733/portfolio/Articles/Breaking%20down%20Robust:%20How%20to%20create%20your%20own%20React%20component%20library%20inspired%20by%20Styled%20Components%2C%20Tailwind%2C%20and%20Chakra%20UI%20%28Advanced%20TypeScript%29/1685386733005_l48rgz.png",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169733/portfolio/Articles/Breaking%20down%20Robust:%20How%20to%20create%20your%20own%20React%20component%20library%20inspired%20by%20Styled%20Components%2C%20Tailwind%2C%20and%20Chakra%20UI%20%28Advanced%20TypeScript%29/1685385868929_yvkze4.png",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169733/portfolio/Articles/Breaking%20down%20Robust:%20How%20to%20create%20your%20own%20React%20component%20library%20inspired%20by%20Styled%20Components%2C%20Tailwind%2C%20and%20Chakra%20UI%20%28Advanced%20TypeScript%29/1685386484533_pfjweq.png",
      ],
      href: "/articles/breaking-robust",
    },
  ];

  return (
    <>
      <Cover heading={cover.title} subHeading={cover.text} />
      <Section
        id="articles"
        headerUrl="/articles"
        header={{ en: "Discover My Articles", es: "Descubre Mis Artículos" }}
        contentImage={articles}
      />
    </>
  );
}
