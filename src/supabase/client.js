import { createClient } from "@supabase/supabase-js";

const { VITE_SUPABASE_URL: supaBaseUrl, VITE_SUPABASE_PASSKEY: supaBasePBK } =
  import.meta.env;

export const supabase = createClient(supaBaseUrl, supaBasePBK);
