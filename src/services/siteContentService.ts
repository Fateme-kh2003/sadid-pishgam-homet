import { supabase } from "../lib/supabaseClint";

export const getSiteContentRequest = async (
  section: string
): Promise<Record<string, string> | null> => {
  const { data, error } = await supabase
    .from("site_content")
    .select("data")
    .eq("section", section)
    .maybeSingle();

  if (error) throw error;
  return data ? (data.data as Record<string, string>) : null;
};

export const saveSiteContentRequest = async (
  section: string,
  content: Record<string, string>
): Promise<void> => {
  const { error } = await supabase
    .from("site_content")
    .upsert({ section, data: content, updated_at: new Date().toISOString() }, { onConflict: "section" });

  if (error) throw error;
};