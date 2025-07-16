"use client";

import {
  MailboxIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import {
  Flex,
  Grid,
  Heading,
  Paragraph,
  Section,
} from "@watermelonbros/watermelon-ui";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Contacts() {
  return (
    <Section
      className="h-screen overflow-x-hidden py-32"
      padded={false}
      id="contacts"
    >
      <Grid columns={12} gap={24} className="items-center">
        <div className="flex flex-col gap-6 col-span-12 lg:col-span-6">
          <Heading variant="h2" font="sans" weight="medium">
            Contattaci
          </Heading>

          <div className="mt-8 text-sm text-gray-600">
            <Flex direction="row" gap={4} justify="start" align="center">
              <MailboxIcon size={24} weight="duotone" />
              <Paragraph>Email:</Paragraph>{" "}
              <Paragraph weight="bold">
                <a
                  href="mailto:produzione@modaretessuti.com"
                  className="hover:underline"
                >
                  produzione@modaretessuti.com
                </a>
              </Paragraph>
            </Flex>
            <Flex direction="row" gap={4} justify="start" align="center">
              <PhoneIcon size={24} weight="duotone" />
              <Paragraph>Telefono e Fax:</Paragraph>{" "}
              <Paragraph weight="bold">
                <a href="tel:0331639577" className="hover:underline">
                  0331 639577
                </a>
              </Paragraph>
            </Flex>

            <Flex direction="row" gap={4} justify="start" align="center">
              <MapPinIcon size={24} weight="duotone" />
              <Paragraph>Indirizzo:</Paragraph>{" "}
              <Paragraph weight="bold">
                <a
                  href={`https://www.google.com/maps/place/Modare+S.r.l./@45.6077876,8.8716082,108m/data=!3m1!1e3!4m15!1m8!3m7!1s0x47868c6f767189c9:0xf5b7720ad9e74dfd!2sVia+del+Roccolo,+18,+21052+Busto+Arsizio+VA!3b1!8m2!3d45.6077577!4d8.8716754!16s%2Fg%2F11bw42y3nc!3m5!1s0x47868c6fa94001a5:0xccd1452f8630cfda!8m2!3d45.6079269!4d8.8718035!16s%2Fg%2F11cmpfn89g?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D`}
                  className="hover:underline"
                >
                  Via del Roccolo 18 - 21152 - Busto Arsizio
                </a>
              </Paragraph>
            </Flex>

            <Flex direction="row" gap={4} justify="start" align="center">
              <WhatsappLogoIcon size={24} weight="duotone" />
              <Paragraph>Scrivici anche su Whatsapp al</Paragraph>{" "}
              <Paragraph weight="bold">
                <a
                  href="https://wa.me/393398443235"
                  className="hover:underline"
                >
                  +393398443235
                </a>
              </Paragraph>
            </Flex>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <Map />
        </div>
      </Grid>
    </Section>
  );
}
