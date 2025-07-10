"use client";

import {
  Flex,
  Grid,
  Heading,
  Paragraph,
  Section,
} from "@watermelonbros/watermelon-ui";
import Image from "next/image";

const About = () => {
  return (
    <Section
      className="h-screen overflow-x-hidden pt-56"
      padded={false}
      id="about"
    >
      <Grid columns={12} gap={24} className="items-center">
        <div className="col-span-12 lg:col-span-6 rounded-2xl relative aspect-[4/3] hover:scale-95 transition-all duration-300 ease-in-out overflow-hidden hidden lg:block">
          <Image
            src="/images/chisiamo.webp"
            alt="Showroom Modare o dettaglio tessuto"
            fill
            className="object-cover transition-transform duration-300 ease-in-out will-change-transform hover:scale-120"
          />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <Flex direction="col" gap={6}>
            <Heading variant="h2" as="h2" font="sans" weight="medium">
              Chi siamo
            </Heading>
            <Paragraph
              className="text-paragraph leading-relaxed max-w-prose"
              font="sans"
            >
              Fondata nel 2016 a Busto Arsizio, <strong>Modare</strong> è il
              risultato di oltre vent’anni di esperienza nel settore tessile.
              Offriamo una selezione curata di tessuti di qualità per
              professionisti della moda, sartorie e aziende, con un servizio
              personalizzato e una forte attenzione al cliente.
            </Paragraph>
            <Paragraph
              className="text-paragraph leading-relaxed max-w-prose"
              font="sans"
            >
              Dai lini ai pizzi, dal cotone alle fantasie stampate, il nostro
              catalogo è pensato per soddisfare ogni esigenza estetica e
              produttiva. Crediamo nell’eleganza che parte dalla materia prima.
            </Paragraph>
          </Flex>
        </div>

        <div className="col-span-12 lg:col-span-6 rounded-2xl relative aspect-[4/3] hover:scale-95 transition-all duration-300 ease-in-out overflow-hidden block lg:hidden">
          <Image
            src="/images/chisiamo.webp"
            alt="Showroom Modare o dettaglio tessuto"
            fill
            className="object-cover transition-transform duration-300 ease-in-out will-change-transform hover:scale-120"
          />
        </div>
      </Grid>
    </Section>
  );
};

export default About;
