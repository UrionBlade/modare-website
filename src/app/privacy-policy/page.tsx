"use client";

import { Heading, Paragraph, Section } from "@watermelonbros/watermelon-ui";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="w-full p-10 overflow-x-hidden">
        <Navbar fromOtherPage />
        <Section className="py-32 max-w-4xl mx-auto">
          <Heading variant="h2" font="sans" className="mb-8">
            Privacy Policy
          </Heading>

          <Paragraph className="mb-6">
            La presente informativa descrive le modalità di trattamento dei dati
            personali raccolti attraverso questo sito web, in conformità al
            Regolamento UE 2016/679 (GDPR).
          </Paragraph>

          <Heading variant="h4" font="sans" className="mb-4">
            1. Titolare del trattamento
          </Heading>
          <Paragraph className="mb-6">
            Il titolare del trattamento è Modare S.r.l., con sede in Italia. Per
            qualsiasi richiesta relativa alla privacy è possibile contattarci
            all’indirizzo email indicato nella sezione Contatti.
          </Paragraph>

          <Heading variant="h4" font="sans" className="mb-4">
            2. Dati raccolti
          </Heading>
          <Paragraph className="mb-6">
            Il sito raccoglie esclusivamente dati forniti volontariamente
            dall’utente tramite il modulo di contatto (es. nome, email,
            messaggio). Non utilizziamo cookie di profilazione o strumenti di
            tracciamento a fini di marketing.
          </Paragraph>

          <Heading variant="h4" font="sans" className="mb-4">
            3. Finalità del trattamento
          </Heading>
          <Paragraph className="mb-6">
            I dati raccolti vengono utilizzati esclusivamente per rispondere
            alle richieste inviate tramite il modulo di contatto.
          </Paragraph>

          <Heading variant="h4" font="sans" className="mb-4">
            4. Base giuridica
          </Heading>
          <Paragraph className="mb-6">
            Il trattamento si basa sul legittimo interesse del titolare a
            fornire risposte alle richieste degli utenti (art. 6.1.f GDPR).
          </Paragraph>

          <Heading variant="h4" font="sans" className="mb-4">
            5. Conservazione dei dati
          </Heading>
          <Paragraph className="mb-6">
            I dati saranno conservati solo per il tempo necessario a gestire la
            richiesta e successivamente cancellati.
          </Paragraph>

          <Heading variant="h4" font="sans" className="mb-4">
            6. Diritti dell’utente
          </Heading>
          <Paragraph className="mb-6">
            Gli utenti possono esercitare in qualsiasi momento i diritti
            previsti dagli artt. 15-22 del GDPR, tra cui accesso, rettifica e
            cancellazione dei dati, contattando il titolare.
          </Paragraph>

          <Heading variant="h4" font="sans" className="mb-4">
            7. Modifiche
          </Heading>
          <Paragraph>
            La presente informativa può essere soggetta ad aggiornamenti. Ti
            invitiamo a consultarla periodicamente.
          </Paragraph>
        </Section>
      </main>
      <Footer />
    </>
  );
}
