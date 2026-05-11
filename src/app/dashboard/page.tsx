import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "../auth/actions";

export default async function Dashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth");

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1026] via-[#1a2554] to-[#0b1026] text-white">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_20%,#fff_1px,transparent_1px),radial-gradient(circle_at_70%_60%,#fff_1px,transparent_1px)] [background-size:280px_280px,360px_360px] opacity-50" />

      <div className="relative mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16">
        <h1 className="font-[family-name:var(--font-dunggeunmo)] text-3xl">
          walk-to-universe
        </h1>
        <p className="mt-4 text-sm text-white/70">{user.email} 님, 어서오세요.</p>

        <section className="mt-12 w-full rounded-lg border border-white/15 bg-white/5 p-6 backdrop-blur">
          <h2 className="font-[family-name:var(--font-dunggeunmo)] text-xl">
            다음 단계
          </h2>
          <p className="mt-2 text-sm text-white/70">
            뽀모도로 타이머 화면을 여기에 만들어요. 시작 버튼을 누르면 평지 걸음 속도 (시속 약 4.8km) 로 우주를 향해 걸어가요.
          </p>
        </section>

        <form action={signOut} className="mt-10">
          <button
            type="submit"
            className="font-[family-name:var(--font-dunggeunmo)] rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm text-white/80 transition hover:border-white hover:text-white"
          >
            로그아웃
          </button>
        </form>
      </div>
    </main>
  );
}
