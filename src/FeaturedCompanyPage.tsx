export default function LuovaIXIPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f5f1ec] overflow-x-hidden selection:bg-[#e7c3cb] selection:text-black">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#e7c3cb] text-black rounded-bl-[48px] px-8 md:px-14 lg:px-16 pt-10 pb-0">

        {/* Nav row */}
        <div className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase opacity-70">
          <button className="hover:opacity-100 transition-opacity">
            ← All Featured
          </button>
          <div className="flex gap-8">
            <button className="hover:opacity-100 transition-opacity">Prev</button>
            <button className="hover:opacity-100 transition-opacity">Next</button>
          </div>
        </div>

        {/* Breadcrumb */}
        <p className="mt-14 text-[11px] tracking-[0.24em] uppercase opacity-60">
          Curation / Hardware / 2026
        </p>

        {/* Company name */}
        <h1 className="mt-6 text-[clamp(96px,14vw,148px)] leading-none tracking-[-0.04em] font-black">
          IXI
        </h1>

        {/* Tagline */}
        <h2 className="mt-8 text-[clamp(28px,4.5vw,54px)] leading-[1.12] tracking-[-0.03em] font-normal max-w-[640px]">
          Autofocus eyewear that adapts in real time to how we see.
        </h2>

        {/* Spacer */}
        <div className="h-20 md:h-28" />

        {/* Stats bar */}
        <div className="border-t border-black/15 pt-10 pb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            {[
              { label: 'Founded',   value: '2026' },
              { label: 'Location',  value: 'Espoo, Finland' },
              { label: 'Team Size', value: '11–50' },
              { label: 'Status',    value: '• Early stage' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] tracking-[0.24em] uppercase opacity-45 font-normal">
                  {item.label}
                </p>
                <p className="mt-4 text-[20px] tracking-[-0.03em] leading-none font-normal">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-14 lg:px-16 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Lead paragraph */}
            <p className="text-[clamp(22px,2.8vw,36px)] leading-[1.45] tracking-[-0.03em] text-[#f1ede7] font-extralight max-w-[480px]">
              Founded by veterans from Varjo, IXI explores a quieter direction for consumer technology: adaptive eyewear designed to integrate naturally into everyday life rather than compete for attention.
            </p>

            {/* Body copy */}
            <div className="mt-12 space-y-8 text-[15px] leading-[1.85] tracking-[-0.01em] text-[#8a8480] max-w-[400px]">
              <p>
                By combining precision optics, industrial design and ambient computing principles, the company is building technology that feels almost invisible, responding to human behaviour instead of demanding constant focus.
              </p>
              <p>
                The broader philosophy behind IXI removes spectacle from the experience entirely. The product is designed to disappear into use: soft interfaces, restrained form language and seamless interaction replacing the visual noise commonly associated with consumer hardware.
              </p>
            </div>

            {/* Carbon composite image card */}
            <div className="mt-14 max-w-[340px] overflow-hidden rounded-[18px] bg-[#111]">
              <div className="aspect-[340/300] bg-[linear-gradient(160deg,#2a2a2a_0%,#0d0d0d_100%)]" />
              <div className="flex items-center justify-between px-5 py-4 border-t border-white/[0.06]">
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#f0ece6]">
                  Carbon Composite Detail
                </p>
                <button className="text-white/50 hover:text-white transition-colors text-[18px] leading-none">
                  ⊕
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-4 max-w-[360px] lg:ml-auto w-full">

            {/* Fig 01 — Product Elevation */}
            <div className="overflow-hidden rounded-[18px] bg-[#0f0f0f]">
              <div className="px-5 pt-5 pb-3">
                <p className="text-[10px] tracking-[0.24em] uppercase text-white/50">
                  Fig 01. Product Elevation
                </p>
              </div>
              <div className="aspect-[360/270] bg-[radial-gradient(ellipse_at_60%_50%,#242424_0%,#060606_75%)]" />
            </div>

            {/* Added to Luova */}
            <div className="rounded-[18px] bg-[#111] px-6 py-7">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-white/40">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M2 8h16" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.24em] uppercase text-white/45">
                    Added to Luova
                  </p>
                  <p className="mt-3 text-[36px] tracking-[-0.04em] leading-none text-[#e5b8c2]">
                    November 2026
                  </p>
                  <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <a href="#" className="text-[26px] tracking-[-0.03em] text-[#e5b8c2] hover:opacity-75 transition-opacity">
                      ixi.com
                    </a>
                    <span className="text-[#e5b8c2] text-base">↗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Known For */}
            <div className="rounded-[18px] bg-[#111] px-6 py-7">
              <p className="text-[10px] tracking-[0.24em] uppercase text-white/45">
                Known For
              </p>
              <div className="mt-7 space-y-4 text-[15px] tracking-[-0.02em] text-[#efeae4]">
                {[
                  'Post-Varjo hardware team',
                  'Precision optics',
                  'Ambient computing direction',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="text-[#e7c3cb] select-none">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
