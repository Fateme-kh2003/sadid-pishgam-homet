import { supabase } from "../lib/supabaseClint";
import type { ServiceItem } from "../Types/content";

export const getServicesRequest = async (): Promise<ServiceItem[]> => {
  const { data, error } = await supabase.from("services").select("*").order("created_at");

  if (error) throw error;
  return data as ServiceItem[];
};

export const addServiceRequest = async (
  service: Omit<ServiceItem, "id">
): Promise<ServiceItem> => {
  const { data, error } = await supabase.from("services").insert(service).select().single();

  if (error) throw error;
  return data as ServiceItem;
};

export const updateServiceRequest = async (
  id: string,
  service: Omit<ServiceItem, "id">
): Promise<ServiceItem> => {
  const { data, error } = await supabase
    .from("services")
    .update(service)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as ServiceItem;
};

export const deleteServiceRequest = async (id: string): Promise<void> => {
  const { error } = await supabase.from("services").delete().eq("id", id);

  if (error) throw error;
};