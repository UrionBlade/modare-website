"use client";
import {
  Grid,
  Heading,
  Paragraph,
  Section,
} from "@watermelonbros/watermelon-ui";
import Image from "next/image";

export default function ServiziBento() {
  return (
    <Section className="py-32 bg-white" id="services" padded={false}>
      <Grid columns={12} gap={24} className="items-center">
        {/* Missione - testo */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
          <Heading variant="h2" font="sans" weight="medium" className="mb-4">
            La nostra missione
          </Heading>
          <Paragraph>
            Offrire un’esperienza sartoriale completa, fornendo tessuti pregiati
            e assistenza professionale per ogni tipo di esigenza, dal
            dettagliante al grande produttore.
          </Paragraph>
        </div>

        {/* Immagine decorativa */}
        <div className="col-span-12 lg:col-span-8 relative rounded-3xl overflow-hidden aspect-[4/3] hover:scale-95 transition-all duration-300 ease-in-out">
          <Image
            src="/images/services.webp"
            alt="Tessuto decorativo"
            fill
            className="object-cover transition-transform duration-300 ease-in-out will-change-transform hover:scale-120"
          />
        </div>

        {/* Servizio 1 */}
        <div className="col-span-5 col-start-2 lg:col-span-3 gap-4 lg:col-start-4 flex flex-col p-8 bg-[#f4f4f4] border border-gray-200 rounded-3xl justify-between mt-32 hover:scale-110 transition-transform duration-300 ease-in-out">
          <Heading variant="h4" font="sans">
            Servizi su misura
          </Heading>
          <Paragraph>
            Offriamo assistenza completa nella scelta dei tessuti, con
            consulenze dedicate e ricerca materiali.
          </Paragraph>
        </div>

        {/* Servizio 2 */}
        <div className="col-span-5 lg:col-span-3 gap-4 flex flex-col p-8 bg-[#f4f4f4] border border-gray-200 rounded-3xl justify-between mt-32 hover:scale-110 transition-transform duration-300 ease-in-out">
          <Heading variant="h4" font="sans">
            Tessuti esclusivi
          </Heading>
          <Paragraph>
            Una collezione ricercata e in continua evoluzione, curata nei
            dettagli e adatta a ogni stile.
          </Paragraph>
        </div>
      </Grid>
    </Section>
  );
}
