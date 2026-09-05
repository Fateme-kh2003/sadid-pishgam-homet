import { supabase } from "../lib/supabaseClint";

export const uploadServiceImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from("services")
    .upload(fileName, file);

  if (uploadError) {
    throw uploadError;
  }

  const { data } = supabase.storage
    .from("services")
    .getPublicUrl(fileName);

  return data.publicUrl;
};