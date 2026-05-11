"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type ActionResult = { error: string } | { success: string };

function parseCredentials(formData: FormData): { email: string; password: string } | { error: string } {
  const email = (formData.get("email") ?? "").toString().trim();
  const password = (formData.get("password") ?? "").toString();
  if (!email || !password) return { error: "이메일과 비밀번호를 모두 입력해 주세요." };
  if (password.length < 6) return { error: "비밀번호는 6자 이상이어야 해요." };
  return { email, password };
}

async function requestOrigin(): Promise<string> {
  const h = await headers();
  const fromOrigin = h.get("origin");
  if (fromOrigin) return fromOrigin;
  const host = h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export async function login(_prev: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const parsed = parseCredentials(formData);
  if ("error" in parsed) return parsed;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(parsed);
  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(_prev: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const parsed = parseCredentials(formData);
  if ("error" in parsed) return parsed;

  const origin = await requestOrigin();
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    ...parsed,
    options: {
      emailRedirectTo: `${origin}/auth/confirm?next=/dashboard`,
    },
  });
  if (error) return { error: error.message };

  if (!data.session) {
    return { success: "가입 메일을 보냈어요. 메일함에서 링크를 눌러 인증해 주세요." };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
