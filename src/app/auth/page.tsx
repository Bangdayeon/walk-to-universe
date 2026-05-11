"use client";

import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onLogin() {
    console.log("login", { email, password });
  }

  function onSignup() {
    console.log("signup", { email, password });
  }

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

        <form
          className="mt-10 w-full space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <div className="space-y-1">
            <label htmlFor="email" className="block text-xs text-white/70">
              이메일
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 focus:border-white/50 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <button
              type="submit"
              className="font-[family-name:var(--font-dunggeunmo)] rounded-md bg-white py-3 text-base text-[#0b1026] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              로그인
            </button>
            <button
              type="button"
              onClick={onSignup}
              className="font-[family-name:var(--font-dunggeunmo)] rounded-md border border-white/40 bg-transparent py-3 text-base text-white transition hover:border-white hover:bg-white/10"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
