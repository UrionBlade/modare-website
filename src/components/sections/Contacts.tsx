"use client";

import {
  Button,
  Heading,
  Input,
  Textarea,
} from "@watermelonbros/watermelon-ui";
import { ErrorMessage, Field, Form, Formik } from "formik";
import dynamic from "next/dynamic";
import * as Yup from "yup";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const validationSchema = Yup.object({
  email: Yup.string().email("Email non valida").required("Campo obbligatorio"),
  message: Yup.string().required("Campo obbligatorio"),
});

export default function Contacts() {
  const initialValues = { email: "", message: "" };
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Inviato:", values);
  };

  const position: [number, number] = [45.60803045579523, 8.872127141388953];

  return (
    <section
      id="contacts"
      className="py-32 bg-white grid grid-cols-1 md:grid-cols-2 gap-16"
    >
      <div className="flex flex-col gap-6">
        <Heading variant="h2" font="sans" weight="medium">
          Contattaci
        </Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col gap-4">
              <Field name="email" as={Input} placeholder="La tua email" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />

              <Field
                name="message"
                as={Textarea}
                placeholder="Scrivi il tuo messaggio..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />

              <Button type="submit">Invia messaggio</Button>
            </Form>
          )}
        </Formik>

        <div className="mt-8 text-sm text-gray-600">
          <p>produzione@modaretessuti.com</p>
          <p>0331 639577</p>
          <p>Via del Roccolo 18 - 21152 - Busto Arsizio</p>
        </div>
      </div>

      <div>
        <Map />
      </div>
    </section>
  );
}
