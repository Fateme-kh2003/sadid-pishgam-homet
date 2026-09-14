import { supabase } from "../lib/supabaseClint";
import type { TeamMember } from "../Types/content";

export const getTeamMembersRequest = async (): Promise<TeamMember[]> => {
  const { data, error } = await supabase.from("team_members").select("*").order("created_at");

  if (error) throw error;
  return data as TeamMember[];
};

export const addTeamMemberRequest = async (
  member: Omit<TeamMember, "id">
): Promise<TeamMember> => {
  const { data, error } = await supabase.from("team_members").insert(member).select().single();

  if (error) throw error;
  return data as TeamMember;
};

export const updateTeamMemberRequest = async (
  id: string,
  member: Omit<TeamMember, "id">
): Promise<TeamMember> => {
  const { data, error } = await supabase
    .from("team_members")
    .update(member)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as TeamMember;
};

export const deleteTeamMemberRequest = async (id: string): Promise<void> => {
  const { error } = await supabase.from("team_members").delete().eq("id", id);

  if (error) throw error;
};