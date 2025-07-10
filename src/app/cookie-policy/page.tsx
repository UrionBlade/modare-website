"use client";

import { Heading, Paragraph, Section } from "@watermelonbros/watermelon-ui";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export default function CookiePolicyPage() {
  return (
    <>
      <main className="w-full p-10 overflow-x-hidden">
        <Navbar fromOtherPage />
        <Section className="max-w-3xl mx-auto py-32">
          <Heading as="h1" variant="h2" font="sans" className="mb-6">
            Cookie Policy
          </Heading>

          <Paragraph className="mb-4">
            Questo sito utilizza esclusivamente <strong>cookie tecnici</strong>{" "}
            per garantire il corretto funzionamento delle pagine e migliorare
            l’esperienza di navigazione.
          </Paragraph>

          <Paragraph className="mb-4">
            Non utilizziamo cookie di profilazione, di marketing o di terze
            parti. Per questo motivo,{" "}
            <strong>non viene richiesto alcun consenso</strong> all’utente
            all’accesso al sito.
          </Paragraph>

          <Heading as="h2" variant="h4" font="sans" className="mt-10 mb-3">
            Cosa sono i cookie tecnici?
          </Heading>

          <Paragraph className="mb-4">
            Sono file necessari per il corretto funzionamento del sito,
            utilizzati ad esempio per salvare la lingua preferita, gestire la
            sessione utente o garantire la sicurezza della navigazione.
          </Paragraph>

          <Heading as="h2" variant="h4" font="sans" className="mt-10 mb-3">
            Come gestire i cookie
          </Heading>

          <Paragraph className="mb-4">
            Non è prevista la gestione delle preferenze poiché non utilizziamo
            cookie opzionali. Se desideri, puoi comunque disattivare i cookie
            dal tuo browser, ma questo potrebbe compromettere alcune
            funzionalità essenziali del sito.
          </Paragraph>

          <Heading as="h2" variant="h4" font="sans" className="mt-10 mb-3">
            Titolare del trattamento
          </Heading>

          <Paragraph className="mb-2">
            <strong>Modare S.r.l.</strong>
          </Paragraph>
          <Paragraph className="mb-2">
            Via del Roccolo 18 - 21152 - Busto Arsizio
          </Paragraph>
          <Paragraph className="mb-2">P.IVA: [inserire P.IVA]</Paragraph>
          <Paragraph className="mb-2">
            Email: produzione@modaretessuti.com
          </Paragraph>
        </Section>
      </main>
      <Footer />
    </>
  );
}
