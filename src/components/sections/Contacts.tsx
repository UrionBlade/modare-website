"use client";

import {
  Button,
  Heading,
  Input,
  Textarea,
} from "@watermelonbros/watermelon-ui";
import { ErrorMessage, Field, Form, Formik } from "formik";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as Yup from "yup";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: new URL(
    "leaflet/dist/images/marker-icon.png",
    import.meta.url,
  ).toString(),
  shadowUrl: new URL(
    "leaflet/dist/images/marker-shadow.png",
    import.meta.url,
  ).toString(),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
        <MapContainer
          center={position}
          zoom={30}
          scrollWheelZoom={false}
          className="h-full w-full rounded-3xl min-h-[300px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Modare S.r.l.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
