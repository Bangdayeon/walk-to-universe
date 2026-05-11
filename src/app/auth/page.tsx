"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login, signup } from "./actions";

const initialState = null;

export default function AuthPage() {
  const [loginState, loginAction, loginPending] = useActionState(login, initialState);
  const [signupState, signupAction, signupPending] = useActionState(signup, initialState);

  const message =
    (loginState && "error" in loginState && loginState.error) ||
    (signupState && "error" in signupState && signupState.error) ||
    (signupState && "success" in signupState && signupState.success) ||
    null;

  const messageTone =
    signupState && "success" in signupState ? "text-emerald-300" : "text-red-300";

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1026] via-[#1a2554] to-[#0b1026] text-white">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_20%,#fff_1px,transparent_1px),radial-gradient(circle_at_70%_60%,#fff_1px,transparent_1px)] [background-size:280px_280px,360px_360px] opacity-50" />

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 py-16">
        <Link
          href="/"
          className="font-[family-name:var(--font-dunggeunmo)] mb-8 self-start text-sm text-white/60 hover:text-white"
        >
          ← 처음으로
        </Link>

        <h1 className="font-[family-name:var(--font-dunggeunmo)] text-3xl">
          walk-to-universe
        </h1>
        <p className="mt-2 text-sm text-white/70">계정으로 들어와요</p>

        <form className="mt-10 w-full space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-xs text-white/70">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 focus:border-white/50 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-xs text-white/70">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              minLength={6}
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 focus:border-white/50 focus:outline-none"
              placeholder="6자 이상"
            />
          </div>

          {message && (
            <p className={`text-xs ${messageTone}`}>{message}</p>
          )}

          <div className="grid grid-cols-2 gap-3 pt-4">
            <button
              type="submit"
              formAction={loginAction}
              disabled={loginPending || signupPending}
              className="font-[family-name:var(--font-dunggeunmo)] rounded-md bg-white py-3 text-base text-[#0b1026] transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loginPending ? "..." : "로그인"}
            </button>
            <button
              type="submit"
              formAction={signupAction}
              disabled={loginPending || signupPending}
              className="font-[family-name:var(--font-dunggeunmo)] rounded-md border border-white/40 bg-transparent py-3 text-base text-white transition hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {signupPending ? "..." : "회원가입"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
