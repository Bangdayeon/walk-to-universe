import Link from "next/link";

const milestones = [
  { name: "10층 아파트", height: "30 m" },
  { name: "롯데월드타워", height: "555 m" },
  { name: "자유의 여신상", height: "93 m" },
  { name: "기자 피라미드", height: "139 m" },
  { name: "대기권", height: "100 km" },
  { name: "지구 탈출", height: "11.2 km/s" },
  { name: "무궁화 위성", height: "36,000 km" },
  { name: "화성", height: "5,460만 km" },
  { name: "금성", height: "4,100만 km" },
  { name: "태양", height: "1억 5천만 km" },
];

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1026] via-[#1a2554] to-[#f6d27a] text-white">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_25%_15%,#fff_1px,transparent_1px),radial-gradient(circle_at_75%_30%,#fff_1px,transparent_1px),radial-gradient(circle_at_40%_70%,#fff_1px,transparent_1px)] [background-size:300px_300px,400px_400px,250px_250px] opacity-60" />

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-between px-6 py-16">
        <header className="text-center">
          <h1 className="font-[family-name:var(--font-dunggeunmo)] text-4xl leading-tight md:text-6xl">
            지구에서 태양까지,
            <br />
            한 걸음씩.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/80 md:text-base">
            할 일을 하는 동안 켜두면 그 시간만큼 우주로 걸어 올라가요.
            <br />
            성인 평균 걸음 속도 기준, 평지를 걷듯 수직으로 올라가는 뽀모도로 타이머예요.
          </p>
        </header>

        <ul className="my-12 grid w-full grid-cols-2 gap-3 text-xs text-white/80 md:grid-cols-5 md:text-sm">
          {milestones.map((m) => (
            <li
              key={m.name}
              className="rounded border border-white/15 bg-white/5 px-3 py-2 text-center backdrop-blur"
            >
              <div className="font-medium">{m.name}</div>
              <div className="mt-1 text-[10px] text-white/60 md:text-xs">{m.height}</div>
            </li>
          ))}
        </ul>

        <Link
          href="/auth"
          className="font-[family-name:var(--font-dunggeunmo)] inline-flex items-center justify-center rounded-md bg-white px-10 py-4 text-2xl text-[#0b1026] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          시작하기
        </Link>
      </div>
    </main>
  );
}
