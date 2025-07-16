import imageCompression from "browser-image-compression";
import { supabase } from "@/lib/supabase";

export type TImage = {
  id: string;
  title: string;
  url: string;
  path: string;
  user_id: string;
};

export const fetchImages = async () => {
  const { data, error } = await supabase
    .from("images")
    .select("*")
    .order("created_at", { ascending: false });

  if (!data || error) {
    return null;
  }

  // Genera URL firmati per ciascuna immagine
  const signedImages = await Promise.all(
    data.map(async (img) => {
      const { data: signed, error: signError } = await supabase.storage
        .from("images")
        .createSignedUrl(img.path, 60 * 60 * 24 * 7); // 7 giorni

      return {
        ...img,
        url: signed?.signedUrl || "",
      };
    }),
  );

  return signedImages;
};

export async function optimizeImage(file: File): Promise<File> {
  const options = {
    maxWidthOrHeight: 1600,
    maxSizeMB: 1,
    useWebWorker: true,
    fileType: "image/webp",
    initialQuality: 0.8,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return new File([compressedFile], file.name.replace(/\.[^/.]+$/, ".webp"), {
      type: "image/webp",
    });
  } catch (error) {
    console.error("Errore ottimizzazione immagine", error);
    throw error;
  }
}
