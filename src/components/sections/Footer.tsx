"use client";

import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";
import { Button, Flex } from "@watermelonbros/watermelon-ui";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-12 py-20 rounded-t-[48px] mt-32">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-start">
        {/* Colonna 1: Branding & Copyright */}
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold tracking-wide">
            Modare S.r.l.
          </span>
          <span className="text-sm text-white/60">
            © 2025 Tutti i diritti riservati.
          </span>
        </div>

        {/* Colonna 2: Link utili */}
        <div className="flex flex-col gap-2">
          <Button
            variant="link"
            href="/cookie-policy"
            className="justify-start text-left text-sm text-white hover:underline px-0"
          >
            Cookie Policy
          </Button>
          <Button
            variant="link"
            href="/privacy-policy"
            className="justify-start text-left text-sm text-white hover:underline px-0"
          >
            Privacy Policy
          </Button>
        </div>

        {/* Colonna 3: Social */}
        <Flex direction="row" gap={6} align="center">
          <Link
            href="https://www.instagram.com/modare.srl/"
            target="_blank"
            rel="noopener"
            className="hover:opacity-80 transition"
          >
            <InstagramLogoIcon size={28} weight="duotone" />
          </Link>
          <Link
            href="https://www.facebook.com/modaresrl"
            target="_blank"
            rel="noopener"
            className="hover:opacity-80 transition"
          >
            <FacebookLogoIcon size={28} weight="duotone" />
          </Link>
        </Flex>
      </div>
      {/* <CookieBanner
        href="/cookie-policy"
        label="Utilizziamo i cookie"
        caption="Per offrirti un'esperienza migliore, utilizziamo i cookie. Per saperne di più, "
        linkString="clicca qui"
        buttonLeftText="Solo necessari"
        buttonRightText="Accetta tutti"
        isOpen={consent === "unset"}
        onButtonRightClick={() => setConsent("essential")}
        onButtonLeftClick={() => setConsent("all")}
      /> */}
    </footer>
  );
}
