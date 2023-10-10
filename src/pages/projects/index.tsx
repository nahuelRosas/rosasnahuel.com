import { Section } from "@/components/section";
import { Cover, Ticon, colors } from "@robust-ui/nextjs-components";

export default function Index() {
  const iconsData: {
    color: keyof typeof colors;
    type: Ticon;
  }[] = [
    { color: "mulberry", type: "brandNextjs" },
    { color: "white", type: "brandAzure" },
    { color: "mulberry", type: "brandNodejs" },
    { color: "white", type: "brandNpm" },
    { color: "mulberry", type: "brandTypescript" },
    { color: "white", type: "brandJavascript" },
    { color: "mulberry", type: "brandGit" },
    { color: "white", type: "brandFirebase" },
    { color: "mulberry", type: "brandVscode" },
    { color: "white", type: "brandRedux" },
    { color: "mulberry", type: "brandTailwind" },
    { color: "white", type: "brandHtml5" },
    { color: "mulberry", type: "brandPython" },
    { color: "white", type: "brandPrisma" },
  ];

  const title = {
    en: "Some Things I’ve | Built",
    es: "Algunas cosas que he | construido",
  };
  const text = {
    en: "A compilation of my projects, code snippets, project source files, and development tools. Every line of code has been meticulously crafted by me for your coding journey.",
    es: "Una recopilación de mis proyectos, fragmentos de código, archivos fuente de proyectos y herramientas de desarrollo. Cada línea de código ha sido meticulosamente diseñada por mí para tu viaje en la programación.",
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

  return (
    <>
      <Cover heading={title} subHeading={text} icons={iconsData} />

      <Section
        id="projects"
        headerUrl="/projects#cover"
        header={{ en: "Discover My Articles", es: "Descubre Mis Artículos" }}
        contentImage={projects}
      />
    </>
  );
}
