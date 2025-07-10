"use client";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Section,
} from "@watermelonbros/watermelon-ui";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const imagesURL = [
    "/images/carousel/hero-1.jpg",
    "/images/carousel/hero-2.jpg",
    "/images/carousel/hero-3.jpg",
    "/images/carousel/hero-4.jpg",
    "/images/carousel/hero-5.jpg",
  ];

  return (
    <Section className="pt-16 overflow-x-hidden" padded={false} id="hero">
      <Grid columns={12} gap={24} className="h-full lg:h-[calc(100vh-4rem)]">
        <div className="col-span-12 lg:col-span-6 h-[calc(50vh-4rem)] lg:h-full">
          <div className="flex flex-col h-full items-start justify-center gap-10">
            <Heading variant="h1" as="h1" font="serif">
              MODARE
            </Heading>
            <Heading variant="h2" as="h2" font="sans" weight="normal">
              Commercio, ingrosso e dettaglio di tessuti di ogni tipo
            </Heading>
            <Flex direction="row" gap={8} align="center" justify="start">
              <Button
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Scopri di più
              </Button>

              <Button variant="outline">Contattaci</Button>
            </Flex>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 relative min-h-[calc(100vh/3*2)] h-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            className="h-full w-full relative rounded-[48px]"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {imagesURL.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Hero Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Grid>
    </Section>
  );
};

export default Hero;
