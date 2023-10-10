import { Section } from "@/components/section";
import { Cover } from "@robust-ui/nextjs-components";
import Head from "next/head";

export default function Index() {
  const cover = {
    title: {
      en: "My Journey: |From Passion to Profession|",
      es: "Mi Viaje: |De la Pasión a la Profesión|",
    },
    text: {
      en: "My journey is a testament to the transformation of passion into a profession. From a young age, technology has been my fascination, shaping my identity in profound ways. With each step in my life, I've nurtured this love for innovation, honing my skills in programming and development.",
      es: "Mi viaje es un testimonio de la transformación de la pasión en una profesión. Desde una edad temprana, la tecnología ha sido mi fascinación, moldeando mi identidad de manera profunda. Con cada paso en mi vida, he cultivado este amor por la innovación, perfeccionando mis habilidades en programación y desarrollo.",
    },
  };

  return (
    <>
      <Head>
        <title>About Me | Nahuel Rosas</title>
        <meta
          name="description"
          content="As a |Typescript specialist| and |Interaction Designer|, I excel in creating seamless user experiences. With expertise in my toolkit and a passion for innovation, I'm driven to tackle complex challenges and deliver exceptional results. Let's explore my journey and potential contributions."
        />
        <meta
          name="keywords"
          content="Nahuel Rosas, Nahuel, Rosas, Nahuel Rosas Developer, Nahuel Rosas Projects, Nahuel Rosas Articles, Nahuel Rosas About Me, Nahuel Rosas Contact, Nahuel Rosas Resume, Nahuel Rosas Portfolio, Nahuel Rosas Blog, Nahuel Rosas Blog Posts, Nahuel Rosas Blog Articles, Nahuel Rosas Blog Projects, Nahuel Rosas Blog About Me, Nahuel Rosas Blog Contact, Nahuel Rosas Blog Resume, Nahuel Rosas Blog Portfolio, Nahuel Rosas Blog Blog, Nahuel Rosas Blog Blog Posts, Nahuel Rosas Blog Blog Articles, Nahuel Rosas Blog Blog Projects, Nahuel Rosas Blog Blog About Me, Nahuel Rosas Blog Blog Contact, Nahuel Rosas Blog Blog Resume, Nahuel Rosas Blog Blog Portfolio, Nahuel Rosas Blog Posts, Nahuel Rosas Blog Articles, Nahuel Rosas Blog Projects, Nahuel Rosas Blog About Me, Nahuel Rosas Blog Contact, Nahuel Rosas Blog Resume, Nahuel Rosas Blog Portfolio, Nahuel Rosas Blog Blog, Nahuel Rosas Blog Blog Posts, Nahuel Rosas Blog Blog Articles, Nahuel Rosas Blog Blog Projects, Nahuel Rosas Blog Blog About Me, Nahuel Rosas Blog Blog Contact, Nahuel Rosas Blog Blog Resume, Nahuel Rosas Blog Blog Portfolio"
        />
        <meta name="author" content="Nahuel Rosas" />
        <meta name="robots" content="index, follow" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#000000" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nahuelrosas" />
        <meta name="twitter:creator" content="@nahuelrosas" />
        <meta name="twitter:title" content="About Me | Nahuel Rosas" />
        <meta
          name="twitter:description"
          content="As a |Typescript specialist| and |Interaction Designer|, I excel in creating seamless user experiences. With expertise in my toolkit and a passion for innovation, I'm driven to tackle complex challenges and deliver exceptional results. Let's explore my journey and potential contributions."
        />
      </Head>
      <Cover heading={cover.title} subHeading={cover.text} />
      <Section
        id="summary"
        contentText={[
          {
            title: {
              en: "Summary",
              es: "Resumen",
            },
            text: {
              en: `I'm an |enthusiastic professional| with a relentless drive for overcoming challenges. My technical skills span a wide range of technologies, including React, Express, NestJS, and Next.js, just to name a few. I find great satisfaction in |achieving and surpassing my goals|.
  In the short term, I'm focused on securing a dynamic role that can fully utilize my potential, while my long-term vision revolves around |reaching new heights| in my development and programming skills. My career is built on a foundation of |lifelong learning| and unwavering professional growth.
  One of my proudest accomplishments is Robust-UI, a React component processor that incorporates dynamic CSS styling through props. This project exemplifies my ability to |conquer complexity| and deliver innovative solutions in the world of development. I am committed to continuously evolving as a professional and making a significant impact on challenging projects in the days ahead.`,
              es: `Soy un |profesional entusiasta| con una pasión inquebrantable por superar desafíos. Mis habilidades técnicas abarcan una amplia variedad de tecnologías, incluyendo React, Express, NestJS y Next.js, solo por nombrar algunas. Encuentro una gran satisfacción en |alcanzar y superar mis metas|.
  En el corto plazo, mi enfoque está en asegurar un rol dinámico que pueda aprovechar al máximo mi potencial, mientras que mi visión a largo plazo gira en torno a |alcanzar nuevas metas| en mi desarrollo y habilidades de programación. Mi carrera se basa en un cimiento de |aprendizaje constante| y crecimiento profesional inquebrantable.
  Uno de mis logros más destacados es Robust-UI, un procesador de componentes React que incorpora estilos CSS dinámicos a través de props. Este proyecto ejemplifica mi habilidad para |conquistar la complejidad| y ofrecer soluciones innovadoras en el mundo del desarrollo. Estoy comprometido en evolucionar continuamente como profesional y hacer un impacto significativo en proyectos desafiantes en los próximos días.`,
            },
          },
        ]}
      />
      <Section
        id="background-story"
        contentText={[
          {
            title: {
              en: "Background story",
              es: "Historia de fondo",
            },
            text: {
              en: `My educational journey is an intriguing blend of intensive bootcamps like Soy Henry and Alura in collaboration with Oracle, combined with my self-driven learning experience. I graduated as a full-stack web developer with a specialization in |MERN stack technologies| through Soy Henry.
  Although my professional journey is relatively young, I've already left a significant mark by spending three transformative months at Uils, an innovative financial startup. Uils specializes in providing financing solutions to self-employed individuals in the transportation sector, working with platforms like Uber, PedidosYa, and UberEats, and acting as a digital wallet.
  Beyond my professional endeavors, I run a successful entrepreneurial venture. I assist clients in securing tickets for major events, including those hosted by River Plate, the Argentine national team, and globally renowned artists like Taylor Swift. Currently, this venture relies on |closed-source Python code| for seamless automation.
  While I may not have reached the peak of my career yet, I am wholeheartedly committed to |making a significant impact| in the near future.
  Outside of my professional pursuits, I have a burning desire to showcase my full potential. My passion is at its brightest when I think about elevating the visibility of Robust-UI, my brainchild, into a universally acclaimed |open-source framework|. My ultimate goal is to have it embraced by fellow developers, thereby making a substantial contribution to the open-source community and propelling the field of web development into |new horizons|.`,
              es: `Mi viaje educativo es una intrigante mezcla de bootcamps intensivos como Soy Henry y Alura en colaboración con Oracle, junto con mi experiencia de aprendizaje autodirigido. Me gradué como desarrollador web full-stack con especialización en |tecnologías MERN stack| a través de Soy Henry.
  Aunque mi trayecto profesional es relativamente joven, ya he dejado una marca significativa al trabajar durante tres transformadores meses en Uils, una innovadora startup financiera. Uils se especializa en ofrecer soluciones de financiamiento a trabajadores independientes del sector del transporte, colaborando con plataformas como Uber, PedidosYa y UberEats, y funcionando como una billetera digital.
  Más allá de mis esfuerzos profesionales, dirijo un próspero emprendimiento empresarial. Ayudo a los clientes a asegurar entradas para eventos importantes, incluidos los organizados por River Plate, la selección nacional argentina y artistas de renombre mundial como Taylor Swift. Actualmente, este emprendimiento se basa en |código Python de código cerrado| para una automatización fluida.
  Aunque aún no haya alcanzado la cima de mi carrera, estoy completamente comprometido en |tener un impacto significativo| en un futuro cercano.
  Fuera de mis actividades profesionales, tengo un ardiente deseo de mostrar todo mi potencial. Mi pasión brilla con fuerza cuando pienso en elevar la visibilidad de Robust-UI, mi creación, en un |marco de código abierto| aclamado universalmente. Mi objetivo final es que sea adoptado por otros desarrolladores, contribuyendo así de manera sustancial a la comunidad de código abierto y llevando el campo del desarrollo web hacia |nuevos horizontes|.`,
            },
          },
        ]}
      />
      <Section
        id="why-development"
        contentText={[
          {
            title: {
              en: "Why Development?",
              es: "¿Por qué el Desarrollo?",
            },
            text: {
              en: `What sparked my journey into development? It all began with an age-old passion that dates back to my childhood. |Technology has always held an irresistible allure| for me, shaping my identity in profound ways.
  During a recent period of self-reflection, I found myself drawn to the path that truly ignites my inner fire: programming and development. This field is nothing short of captivating, encompassing everything from the enchantment of game development with Unity to the intricacies of backend coding and the high-stakes world of cybersecurity. Every aspect of this ever-evolving ecosystem brings me boundless joy.
  What fuels my enthusiasm for development is the ceaseless wonder I discover in technological advancement. In today's world, technology surrounds us, and I'm like an eager explorer in a realm teeming with |uncharted territories and innovation|.
  As a developer, my values are crystal clear: I strive to create code that's not only clean and efficient but also inherently reusable, ensuring excellence in all circumstances and contexts. My mantra can be summed up as |"Clean, Reusable, and Efficient"|.
  One of the defining experiences that solidified my commitment to development is my brainchild, Robust-UI. What started as an attempt to unravel the mysteries of CSS evolved into an exhilarating journey where I |conquered diverse challenges|. My affection for this project runs deep, and even as an open-source endeavor, I'm wholeheartedly dedicated to nurturing its growth and making it even more remarkable.`,
              es: `¿Qué inspiró mi viaje hacia el desarrollo? Todo comenzó con una pasión ancestral que se remonta a mi infancia. |La tecnología siempre ha ejercido un irresistible encanto| sobre mí, moldeando mi identidad de manera profunda.
  En una reciente etapa de autorreflexión, me vi atrapado por el camino que realmente enciende mi fuego interior: la programación y el desarrollo. Este campo es verdaderamente cautivador, abarcando desde el encanto del desarrollo de juegos con Unity hasta las complejidades de la codificación del backend y el vertiginoso mundo de la ciberseguridad. Cada aspecto de este ecosistema en constante evolución me brinda una alegría inmensa.
  Lo que alimenta mi entusiasmo por el desarrollo es la incesante maravilla que encuentro en el avance tecnológico. En el mundo de hoy, la tecnología nos rodea, y yo soy como un explorador ansioso en un reino repleto de |territorios inexplorados e innovación|.
  Como desarrollador, mis valores son cristalinos: me esfuerzo por crear código que no solo sea limpio y eficiente, sino también intrínsecamente reutilizable, asegurando la excelencia en todas las circunstancias y contextos. Mi lema se resume en |"Limpio, Reutilizable y Eficiente"|.
  Una de las experiencias definitorias que consolidaron mi compromiso con el desarrollo es mi creación, Robust-UI. Lo que comenzó como un intento de desentrañar los misterios de CSS se convirtió en un emocionante viaje donde |conquisté diversos desafíos|. Mi cariño por este proyecto es profundo y, incluso como un esfuerzo de código abierto, estoy completamente dedicado a fomentar su crecimiento y hacerlo aún más destacado.`,
            },
          },
        ]}
      />
    </>
  );
}
