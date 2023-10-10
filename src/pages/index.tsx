import { ButtomLink } from "@/components/buttomLink";
import { Flex, Cover } from "@robust-ui/nextjs-components";
import { Section } from "@/components/section";
import Head from "next/head";

function Index() {
  const cover = {
    title: {
      en: "Hey there! I'm |Nahuel Rosas|",
      es: "¡Hola! Soy |Nahuel Rosas|",
    },
    text: {
      en: "As a | Full Stack Developer|, my expertise lies in crafting cutting-edge web applications using |React and TypeScript|. Let's collaborate to bring your digital vision to life with precision and creativity!",
      es: "Como |Desarrollador Full Stack|, mi experiencia radica en la creación de aplicaciones web de vanguardia utilizando |React y TypeScript|. ¡Colaboremos para dar vida a su visión digital con precisión y creatividad!",
    },
  };

  const work = {
    title: {
      en: "A Comprehensive Development Journey",
      es: "Un viaje de desarrollo integral",
    },
    text: {
      en: "Elevating your digital goals with |exceptional user experiences| is my driving force. I welcome you to embark on the journey of crafting an astounding |web application|, leveraging my expertise in cutting-edge technologies such as |TypeScript|, |Next.js|, |Nest|, and other |state-of-the-art tools.|",
      es: "Elevar tus objetivos digitales con |experiencias de usuario excepcionales| es mi fuerza impulsora. Te invito a embarcarte en el viaje de crear una asombrosa |aplicación web|, aprovechando mi experiencia en tecnologías de vanguardia como |TypeScript|, |Next.js|, |Nest| y otras |herramientas increibles.|",
    },

    contentText: [
      {
        title: { en: "Mastering Strategy", es: "Dominando la Estrategia" },
        text: {
          en: "Cultivating |Profound Understanding.| Before diving into the world of programming, my approach centers around asking |fundamental questions| and addressing the most |strategic challenges.| This phase involves immersing in thorough |market research,| extracting insights from |competitive analyses|, conducting consultations to define |precise expectations|, and delving deeply into potential |solutions.|",
          es: "Cultivando un |Entendimiento Profundo.| Antes de sumergirme en el mundo de la programación, mi enfoque se centra en formular |preguntas fundamentales| y abordar los desafíos más |estratégicos.| Esta fase implica inmersión en una investigación de mercado exhaustiva, extracción de perspicacias de |análisis competitivos|, realización de consultas para definir |expectativas precisas| y exploración profunda de posibles |soluciones.|",
        },
      },
      {
        title: { en: "Crafting Experiences", es: "Creando Experiencias" },
        text: {
          en: "Confronting Challenges with |Visual Expertise|. As we move forward, you will shape a |robust vision| for the upcoming |web application.| From initial sketches to the final design, I craft a |visual narrative| that immerses you in the |user experience|. The |prototypes| I create serve as tangible pathways to future interactions, offering an |authentic preview| before embarking on |full-scale development.|",
          es: "Abordando Desafíos con |Pericia Visual|. A medida que avanzamos, dará forma a una |sólida visión| para la próxima |aplicación web.| Desde los primeros bocetos hasta el diseño final, construyo una |narrativa visual| que lo sumerge en la |experiencia del usuario|. Los |prototipos| que desarrollo sirven como senderos tangibles hacia futuras interacciones, ofreciendo una |vista previa auténtica| antes de embarcarse en el |desarrollo a gran escala.|",
        },
      },
      {
        title: { en: "Building Solutions", es: "Construyendo Soluciones" },
        text: {
          en: "Bringing |Visions to Life|. As a specialist spanning the entire |technology stack|, I fuse design |creativity| with the |precision of programming.| I collaborate synergistically with |design| and |development teams| at every stage. In web projects, I not only craft the |user-facing interface| but also bolster the |backend's robustness,| blending both seamlessly for a |harmonious and comprehensive implementation.|",
          es: "Dando |Vida a las Visiones|. Como especialista en toda la |pila de tecnología|, fusiono la |creatividad del diseño| con la |precisión de la programación.| Colaboro sinérgicamente con los equipos de |diseño| y |desarrollo| en cada etapa. En proyectos web, no solo diseño la |interfaz orientada al usuario|, sino que también refuerzo la |robustez del backend|, combinando ambos de manera |armoniosa para una implementación integral y completa.|",
        },
      },
      {
        title: { en: "Ensuring Excellence", es: "Asegurando la Excelencia" },
        text: {
          en: "A |Transparent Workflow|. You'll be kept informed of the development progress through regular meetings. After initial design and programming iterations, my unwavering commitment to |excellence| shines through tailored user testing. This ensures optimized solutions that not only meet but |surpass expectations|, effectively addressing your project's |specific needs.|",
          es: "Un |Flujo de Trabajo Transparente|. Estarás al tanto del progreso de desarrollo a través de reuniones regulares. Después de las |primeras iteraciones de diseño y programación|, mi compromiso inquebrantable con la |excelencia| se refleja en |pruebas de usuario personalizadas|. Esto garantiza soluciones optimizadas que no solo |cumplen, sino que superan las expectativas|, abordando eficazmente las |necesidades específicas de tu proyecto.|",
        },
      },
    ],
  };

  const projects = [
    {
      title: {
        en: "Robust: | Revolutionizing React Web Development",
        es: "Robust: | Revolucionando el desarrollo web de React",
      },
      images: [
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166009/portfolio/Robust/1_aqqep8.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166538/portfolio/Robust/2_evfjao.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166538/portfolio/Robust/3_illrtn.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166538/portfolio/Robust/5_h3ub0t.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166538/portfolio/Robust/6_jvrchh.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166537/portfolio/Robust/7_qxi4b7.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166537/portfolio/Robust/8_tpazet.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166538/portfolio/Robust/9_jnrd4c.webp",
      ],
      href: "/projects/robust",
    },
    {
      title: {
        en: "SkyQuick: | Lightning-Fast Instant Messaging",
        es: "SkyQuick: | Mensajería instantánea ultrarrápida",
      },

      images: [
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1671989003/Logos/SkyQuick/bluewings_1_v4vqqw.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693167863/portfolio/Skyquick/Screenshot_from_2023-08-27_17-23-23_aivcsl.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693167863/portfolio/Skyquick/Screenshot_from_2023-08-27_17-22-54_szhcop.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692056/portfolio/Skyquick/Screenshot_from_2023-01-25_20-34-40_a0gq2e.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692056/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-10_dzq3gt.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-40_rmp1si.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-22_yfgeqm.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-17_rrszow.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-31_xm04vc.webp",
        "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-26_nbkx0z.webp",
      ],
      href: "/projects/skyquick",
    },
    {
      title: {
        en: "PyTicketMaster: | Unleashing Opportunities with Python Scraping for Mass Events",
        es: "PyTicketMaster: | Desatando oportunidades con Python Scraping para eventos masivos",
      },

      images: [
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1692752323/Screenshot/Screenshot_from_2023-08-22_21-56-02_uuuttk.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1692752593/Screenshot/Screenshot_from_2023-07-13_17-33-36_qzbkqa.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1692752323/Screenshot/Screenshot_from_2023-07-13_18-03-25_ejoknq.webp",
      ],
      href: "/projects/pyticketmaster",
    },
    {
      title: {
        en: "Kalo: | Your Ultimate Online Sneaker Destination",
        es: "Kalo: | Tu Destino Definitivo de Zapatillas en Línea",
      },

      images: [
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935733/Screenshot/1675935206665_gx68ax.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935731/Screenshot/1675935241450_gjkpem.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935730/Screenshot/1675935259575_onto22.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935729/Screenshot/1675935378836_z0njz0.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935729/Screenshot/1675935364578_f97oah.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935729/Screenshot/1675935285283_vklvrj.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935729/Screenshot/1675935344675_sgya7v.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935510010_iq8kn1.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935537471_oz0jcn.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935617888_wnddja.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935564614_wrekgk.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935644247_bjzqjx.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935696736_ulouoy.webp",
      ],
      href: "/projects/kalo",
    },
  ];

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

  const aboutMe = {
    header: {
      en: "Pleasure Meeting You!",
      es: "¡Un Placer Conocerte!",
    },

    title: {
      en: "Hi there, I'm Nahuel",
      es: "Hola, soy Nahuel",
    },
    text: {
      en: `Hello there! I'm Nahuel Rosas, a passionate |full-stack developer| with a deep love for |React| and |TypeScript|. 
  My journey in the world of web development has been an exciting adventure, taking me through the doors of educational institutions like |Soy Henry| and |Alura|. Currently, I'm immersing myself in the fascinating realms of |Three.js| and |NestJS|.
  My diverse skill set encompasses a wide range of technologies, including |Recoil|, |Redux|, |Next.js|, |Docker|, |Linux|, |JavaScript|, |TypeScript|, |AWS|, |Google Cloud|, |GitHub|, |Java|, |Python|, |MongoDB|, and |PostgreSQL|.
  Beyond the lines of code, you'll often find me lost in the world of music or passionately cheering for my favorite football team. I take immense pride in being the creator of |Robust|, a CSS solution for |React| that strives for autonomy and personalization. Additionally, I've launched |PyTicketMaster|, a platform that brings event tickets right to your |Twitter| feed.
  For me, technology is not just a tool; it's a canvas for creativity. I'm driven by an insatiable desire to |learn| and |innovate|, and I can't wait to embark on this exciting journey with you!`,
      es: `¡Hola! Soy Nahuel Rosas, un apasionado |desarrollador full-stack| con un profundo amor por |React| y |TypeScript|.
  Mi viaje en el mundo del desarrollo web ha sido una emocionante aventura que me ha llevado a través de las puertas de instituciones educativas como |Soy Henry| y |Alura|. Actualmente, me encuentro sumergido en los fascinantes mundos de |Three.js| y |NestJS|.
  Mi conjunto diversificado de habilidades abarca una amplia gama de tecnologías, que incluyen |Recoil|, |Redux|, |Next.js|, |Docker|, |Linux|, |JavaScript|, |TypeScript|, |AWS|, |Google Cloud|, |GitHub|, |Java|, |Python|, |MongoDB| y |PostgreSQL|.
  Más allá del código, a menudo me encontrarás inmerso en el mundo de la música o animando apasionadamente a mi equipo de fútbol favorito. Me enorgullece enormemente ser el creador de |Robust|, una solución CSS para |React| que busca la autonomía y personalización. Además, he lanzado |PyTicketMaster|, una plataforma que te trae entradas de eventos directamente a tu |feed de Twitter|.
  Para mí, la tecnología no es solo una herramienta; es un lienzo para la creatividad. Me impulsa un deseo insaciable de |aprender| e |innovar|, ¡y no puedo esperar para embarcarme en este emocionante viaje contigo!`,
    },
  };

  return (
    <>
      <Head>
        <title>Nahuel Rosas | Portfolio</title>
        <meta
          name="description"
          content="Nahuel Rosas | Portfolio | Full Stack Developer | React | TypeScript | Next.js | NestJS | Recoil | Redux | Docker | Linux | JavaScript | AWS | Google Cloud | GitHub | Java | Python | MongoDB | PostgreSQL"
        />
        <meta
          name="keywords"
          content="Nahuel Rosas | Portfolio | Full Stack Developer | React | TypeScript | Next.js | NestJS | Recoil | Redux | Docker | Linux | JavaScript | AWS | Google Cloud | GitHub | Java | Python | MongoDB | PostgreSQL"
        />
        <meta name="author" content="Nahuel Rosas" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>

      <Cover heading={cover.title} subHeading={cover.text} />

      <Section
        id="work"
        title={work.title}
        text={work.text}
        contentText={work.contentText}
      />
      <Section
        id="projects"
        headerUrl="/projects#cover"
        header={{
          en: "Explore My Recent Projects",
          es: "Explora Mis Proyectos Recientes",
        }}
        contentImage={projects}
      />
      <Section
        id="articles"
        headerUrl="/articles"
        header={{ en: "Discover My Articles", es: "Descubre Mis Artículos" }}
        contentImage={articles}
      />
      <Section
        id="about-me"
        headerUrl="/about-me#cover"
        header={aboutMe.header}
        title={aboutMe.title}
        text={aboutMe.text}>
        <Flex
          optimizedWidth
          justifyContent="spaceAround"
          mt="3vh"
          flexDirection="row"
          flexWrap="wrap">
          <ButtomLink
            href="https://www.linkedin.com/in/nahuelrosas/"
            title={{ en: "LinkedIn", es: "LinkedIn" }}
            iconType="linkedinBoxFill"
          />
          <ButtomLink
            href="https://twitter.com/_rosasnahuel_"
            title={{ en: "Twitter", es: "Twitter" }}
            iconType="twitterXLine"
          />
          <ButtomLink
            href="https://github.com/nahuelrosas/"
            title={{ en: "Github", es: "Github" }}
            iconType="githubLine"
          />
        </Flex>
      </Section>
    </>
  );
}

export default Index;
