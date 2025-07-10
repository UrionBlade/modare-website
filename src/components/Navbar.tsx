"use client";
import { Button, Flex } from "@watermelonbros/watermelon-ui";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  fromOtherPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ fromOtherPage = false }) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = Math.min(100, (scroll / maxScroll) * 100);
      setScrollPercent(percentage);
    };

    if (!window) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!window) return null; // Ensure window is available

  return (
    <div className="w-full fixed top-0 z-50 bg-white">
      <div className="w-[calc(100%-5rem)] relative">
        <nav className="flex items-center justify-between border-b-2 border-b-gray-200 h-[80px] w-full">
          <div className="w-[120px] h-full relative">
            <Image
              src="/images/logo.jpg"
              alt="Modare Logo"
              fill
              className="object-cover cursor-pointer"
              onClick={() => {
                fromOtherPage
                  ? (window.location.href = "/")
                  : document
                      .getElementById("hero")
                      ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>

          <Flex align="end" justify="end" gap={8} className="h-full">
            <Button
              variant={"link"}
              onClick={() => {
                fromOtherPage
                  ? (window.location.href = "/#about")
                  : document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Chi siamo
            </Button>
            <Button
              variant={"link"}
              onClick={() => {
                fromOtherPage
                  ? (window.location.href = "/#services")
                  : document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Servizi
            </Button>
            <Button
              variant={"link"}
              onClick={() => {
                fromOtherPage
                  ? (window.location.href = "/#contacts")
                  : document
                      .getElementById("contacts")
                      ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contatti
            </Button>
          </Flex>
        </nav>

        <div
          className="absolute h-[0px] border-b-gray-800 border-b-2 top-[78px] left-0"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>
    </div>
  );
};

export default Navbar;
