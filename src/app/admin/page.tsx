"use client";
import { XIcon } from "@phosphor-icons/react";
import {
  Button,
  Dialog,
  FileUploader,
  Flex,
  Heading,
  Input,
  Section,
} from "@watermelonbros/watermelon-ui";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { fetchImages, optimizeImage, type TImage } from "@/utils";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState<any>(null);
  const [images, setImages] = useState<TImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: pass,
    });
    if (error) {
      alert("Login fallito");
    } else {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const getImages = async () => {
    setLoading(true);
    const signedImages = await fetchImages();

    if (!signedImages) {
      setLoading(false);
      return;
    }

    setImages(signedImages);
    setLoading(false);
  };

  const deleteImage = async (img: TImage) => {
    const ok = confirm(`Vuoi davvero eliminare "${img.title}"?`);
    if (!ok) return;

    await supabase.storage.from("images").remove([img.path]);
    await supabase.from("images").delete().eq("id", img.id);
    setImages(images.filter((i) => i.id !== img.id));
  };

  useEffect(() => {
    if (user) getImages();
  }, [user]);

  const handleUpload = async () => {
    if (!uploadFile || !uploadTitle || !user) {
      alert("Completa titolo e immagine");
      return;
    }

    const optimized = await optimizeImage(uploadFile);
    const filename = `${Date.now()}-${optimized.name}`;
    const filePath = `uploads/${filename}`;

    // Upload su Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("images")
      .upload(filePath, uploadFile);

    if (uploadError) {
      alert("Errore upload file");
      return;
    }

    // Salva solo il path nel DB
    const { error: insertError } = await supabase.from("images").insert({
      title: uploadTitle,
      path: filePath,
      user_id: user.id,
    });

    if (insertError) {
      alert("Errore salvataggio DB");
      return;
    }

    // Refresh immagini
    setUploadFile(null);
    setUploadTitle("");
    setDialogOpen(false);

    await fetchImages();
  };

  if (!user) {
    return (
      <Section
        className="w-full flex justify-center items-center"
        padded={false}
      >
        <Flex
          direction="col"
          gap={16}
          className="w-[20rem] h-screen px-4"
          align="center"
          justify="center"
        >
          <Heading as="h2" variant="h2">
            Admin Login
          </Heading>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[20rem]"
          />
          <Input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-[20rem]"
          />
          <Button onClick={login} className="w-[20rem]">
            Login
          </Button>
        </Flex>
      </Section>
    );
  }

  return (
    <Section className="min-h-screen px-4 py-6 text-content">
      <Flex justify="between" align="center" className="mb-6">
        <h1 className="text-2xl font-bold">Carosello nuovi arrivi</h1>
        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </Flex>

      {loading ? (
        <p>Caricamento...</p>
      ) : (
        <div className="flex flex-col w-full gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="border border-border rounded-[24px] bg-surface overflow-hidden shadow relative w-full flex justify-between items-center"
            >
              <div className="flex justify-start items-center">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-40 h-40 object-contain"
                />
                <p className="font-semibold">{img.title}</p>
              </div>
              <Button variant="link" onClick={() => deleteImage(img)}>
                <XIcon size={20} />
              </Button>
            </div>
          ))}
        </div>
      )}
      <div className="fixed bottom-0 right-6">
        <Button
          onClick={() => setDialogOpen(true)}
          variant="solid"
          className="mb-6"
        >
          Carica nuova immagine
        </Button>
      </div>
      <Dialog
        title="Carica nuova immagine"
        description="Inserisci titolo e un'immagine per il carosello"
        open={dialogOpen}
        closeModal={() => setDialogOpen(false)}
      >
        <Flex direction="col" gap={16} className="w-[20rem] mt-8">
          <Input
            placeholder="Titolo immagine"
            value={uploadTitle}
            onChange={(e) => setUploadTitle(e.target.value)}
            className="w-[20rem]"
          />

          <FileUploader
            accept="image/*"
            triggerText="Scegli immagine"
            dropzoneText="Trascina un file qui o seleziona dal tuo dispositivo"
            maxFiles={1}
            onFileChange={(details: any) => {
              console.log("File changed:", details);
              setUploadFile(details.acceptedFiles[0] ?? null);
            }}
          />

          <Button onClick={handleUpload} fullWidth>
            Carica immagine
          </Button>
        </Flex>
      </Dialog>
    </Section>
  );
}
