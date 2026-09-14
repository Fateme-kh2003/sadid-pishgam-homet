import { supabase } from "../lib/supabaseClint";
import type { ProjectDetail } from "../Types/content";

export const getProjectsRequest = async (): Promise<ProjectDetail[]> => {
  const { data, error } = await supabase.from("projects").select("*").order("created_at");

  if (error) throw error;
  return data as ProjectDetail[];
};

export const addProjectRequest = async (
  project: Omit<ProjectDetail, "id">
): Promise<ProjectDetail> => {
  const { data, error } = await supabase.from("projects").insert(project).select().single();

  if (error) throw error;
  return data as ProjectDetail;
};

export const updateProjectRequest = async (
  id: string,
  project: Omit<ProjectDetail, "id">
): Promise<ProjectDetail> => {
  const { data, error } = await supabase
    .from("projects")
    .update(project)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as ProjectDetail;
};

export const deleteProjectRequest = async (id: string): Promise<void> => {
  const { error } = await supabase.from("projects").delete().eq("id", id);
  
  if (error) throw error;
};