import { supabase } from "../lib/supabaseClint";

const ADMIN_EMAIL = "fateme.khodabandelou03@gmail.com";

export const loginRequest = (password: string) => {
  return supabase.auth.signInWithPassword({
    email: ADMIN_EMAIL,
    password,
  });
};

export const logoutRequest = () => {
  return supabase.auth.signOut();
};

export const getSessionRequest = async () => {
  const { data } = await supabase.auth.getSession();
  return data.session;
};