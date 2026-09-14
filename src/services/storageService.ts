import { supabase } from "../lib/supabaseClint";

export const uploadImage = async (bucket: string,file: File): Promise<string> => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;

  const { error } = await supabase.storage.from(bucket).upload(fileName, file);
  if (error) throw error;

  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
  return data.publicUrl;
};

export const uploadServiceImage = (file: File): Promise<string> => uploadImage("services", file);
export const uploadProjectImage = (file: File): Promise<string> => uploadImage("projects", file);
export const uploadTeamImage = (file: File): Promise<string> => uploadImage("team-members", file);
export const uploadSiteContentImage = (file: File): Promise<string> => uploadImage("site-content", file);