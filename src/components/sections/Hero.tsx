"use client";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Section,
} from "@watermelonbros/watermelon-ui";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchImages, TImage } from "@/utils";

const Hero = () => {
  const [images, setImages] = useState<TImage[]>([]);
  const [imageReady, setImageReady] = useState(false);

  const handleGetImages = async () => {
    const images = await fetchImages();

    if (!images) return;

    setImages(images);
  };

  useEffect(() => {
    handleGetImages();
  }, []);

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

              <Button
                variant="outline"
                onClick={() => {
                  document
                    .getElementById("contacts")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contattaci
              </Button>
            </Flex>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 relative min-h-[calc(100vh/3*2)] h-full">
          <div className="relative h-full w-full rounded-[48px]">
            {/* Placeholder sempre visibile dietro */}

            <Image
              src="/images/hero-1.jpg"
              alt="Hero Image Placeholder"
              fill
              className={`object-cover rounded-[48px] ${imageReady ? "opacity-0" : "opacity-100"} transition-opacity duration-75`}
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
            />

            {/* Swiper sopra, trasparente finché non pronto */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${imageReady ? "opacity-100" : "opacity-0"}`}
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="h-full w-full relative rounded-[48px]"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        onLoad={() => {
                          if (index === 0) setImageReady(true);
                        }}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
                      />
                      <Heading
                        variant="h3"
                        as="h3"
                        className="absolute bottom-8 left-8 text-white bg-black bg-opacity-50 p-2 rounded-lg"
                      >
                        {image.title}
                      </Heading>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default Hero;
