import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

const genericResponse = {
  message: "If that email is approved, we sent a login link."
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed." }), {
      status: 405,
      headers: corsHeaders
    });
  }

  try {
    const { email, redirectTo } = await request.json();
    const normalizedEmail = String(email ?? "").trim().toLowerCase();

    if (!normalizedEmail) {
      return new Response(JSON.stringify({ error: "Email is required." }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(JSON.stringify({ error: "Server configuration is incomplete." }), {
        status: 500,
        headers: corsHeaders
      });
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      }
    });

    const { data: student, error: lookupError } = await supabase
      .from("students")
      .select("email")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (lookupError) {
      throw lookupError;
    }

    if (!student) {
      return new Response(JSON.stringify(genericResponse), {
        status: 200,
        headers: corsHeaders
      });
    }

    const { error: signInError } = await supabase.auth.signInWithOtp({
      email: normalizedEmail,
      options: {
        emailRedirectTo: redirectTo ?? Deno.env.get("SITE_URL") ?? undefined,
        shouldCreateUser: true
      }
    });

    if (signInError) {
      throw signInError;
    }

    return new Response(JSON.stringify(genericResponse), {
      status: 200,
      headers: corsHeaders
    });
  } catch (_error) {
    return new Response(JSON.stringify({ error: "Unable to send the login link right now." }), {
      status: 500,
      headers: corsHeaders
    });
  }
});
