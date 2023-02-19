import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://xozvxnumqmtwhcbwiysf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvenZ4bnVtcW10d2hjYndpeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3NDU4MTYsImV4cCI6MTk5MjMyMTgxNn0.2E1O8gI1vW7Wfs8oFosAnRmrI6hVYgPawEIAfevzyM0"
);

export default supabase;
